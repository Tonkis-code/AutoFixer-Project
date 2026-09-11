import { Component, input, computed, signal, OnInit, OnDestroy } from '@angular/core';
import { Vehicle } from '../../models/vehicle';
import { DecimalPipe } from '@angular/common';

@Component({
  imports: [DecimalPipe],
  selector: 'app-hero',
  styleUrl: './hero.css',
  templateUrl: './hero.html',
})
export class Hero implements OnInit, OnDestroy {
  // INPUTS
  // Receives all vehicles from the home component
  vehicles = input.required<Vehicle[]>();

  // STATE / SIGNALS
  // Keeps track of which hero slide is currently shown
  currentIndex = signal(1);

  // Prevents multiple clicks while the slide animation is running
  isSliding = signal(false);

  // Controls whether the slide transition is active
  transitionEnabled = signal(true);

  // Stores the autoplay timer so it can be reset or cleared
  private autoplayInterval?: ReturnType<typeof setInterval>;

  // COMPUTED VALUES
  // Creates the hero slides using vehicle data from the database
  slides = computed(() => {
    const heroVehicles = [
      {
        slug: 'rayfield-caliburn',
        heroImage: 'caliburnhero.png',
      },
      {
        slug: 'rayfield-aerondight-guinevere',
        heroImage: 'aerondighthero.png',
      },
      {
        slug: 'quadra-type-66-avenger',
        heroImage: 'avengerhero.png',
      },
    ];

    return (
      heroVehicles
        .map((heroVehicle) => {
          // Find the matching vehicle from the database using its slug
          const vehicle = this.vehicles().find((vehicle) => vehicle.slug === heroVehicle.slug);

          // Skip the slide if the vehicle cannot be found
          if (!vehicle) {
            return null;
          }

          // Combine database vehicle data with its special hero image
          return {
            vehicle,
            heroImage: heroVehicle.heroImage,
          };
        })
        // Remove any vehicles that could not be found
        .filter((slide): slide is { vehicle: Vehicle; heroImage: string } => slide !== null)
    );
  });

  // Adds copies to both ends for seamless looping
  carouselSlides = computed(() => {
    const slides = this.slides();

    if (slides.length === 0) {
      return [];
    }

    return [slides[slides.length - 1], ...slides, slides[0]];
  });

  // Get the slide matching the current index
  currentSlide = computed(() => {
    const slides = this.slides();

    if (slides.length === 0) {
      return undefined;
    }

    const realIndex = (this.currentIndex() - 1 + slides.length) % slides.length;

    return slides[realIndex];
  });

  // ANGULAR LIFECYCLE - component starts
  // Starts autoplay when the component loads
  ngOnInit() {
    this.autoplayInterval = setInterval(() => {
      this.nextSlide();
    }, 5000);
  }

  // USER INTERACTION
  manualNextSlide() {
    this.restartAutoPlay();
    this.nextSlide();
  }

  manualPreviousSlide() {
    this.restartAutoPlay();
    this.previousSlide();
  }

  // CAROUSEL MOVEMENT
  // Move forward one slide and loop back to the beginning
  nextSlide() {
    if (this.isSliding()) {
      return;
    }

    this.isSliding.set(true);
    this.currentIndex.update((index) => index + 1);
  }

  // Move back one slide and loop to the end when needed
  previousSlide() {
    if (this.isSliding()) {
      return;
    }

    this.isSliding.set(true);
    this.currentIndex.update((index) => index - 1);
  }

  // TRANSITION / LOOP HANDLING
  onTransitionEnd() {
    // Reached copied Caliburn at the end
    if (this.currentIndex() === this.carouselSlides().length - 1) {
      this.transitionEnabled.set(false);
      this.currentIndex.set(1);

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          this.transitionEnabled.set(true);
          this.isSliding.set(false);
        });
      });

      return;
    }

    // Reached copied Avenger at the beginning
    if (this.currentIndex() === 0) {
      this.transitionEnabled.set(false);
      this.currentIndex.set(this.slides().length);

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          this.transitionEnabled.set(true);
          this.isSliding.set(false);
        });
      });

      return;
    }

    this.isSliding.set(false);
  }
  // AUTOPLAY HELPER
  restartAutoPlay() {
    if (this.autoplayInterval) {
      clearInterval(this.autoplayInterval);
    }

    this.autoplayInterval = setInterval(() => {
      this.nextSlide();
    }, 5000);
  }

  // ANGULAR LIFECYCLE - component destroyed
  // Cleans up the timer when the component is destroyed
  ngOnDestroy() {
    if (this.autoplayInterval) {
      clearInterval(this.autoplayInterval);
    }
  }
}
