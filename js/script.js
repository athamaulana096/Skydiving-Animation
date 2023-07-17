const plane = document.getElementById('plane');
const skydiver = document.getElementById('skydiver');

function animate() {
  plane
    .velocity(
      {
        right: '950px',
        bottom: '5%',
        transform: ['rotate(10deg)', 'rotate(1deg)'],
      },
      {
        duration: 4000,
      }
    )
    .velocity(
      {
        top: '0px',
        left: '40%',
      },
      {
        duration: 5000,
      }
    )
    .velocity(
      {
        left: '20%',
        transform: ['rotate(0deg)', 'rotate(10deg)'],
      },
      {
        duration: 5000,
      }
    )

    .velocity(
      {
        left: '-500px',
        top: '100px',
        transform: ['rotate(-5deg)', 'rotate(0deg)'],
      },
      {
        duration: 13000,
      }
    );

  skydiver
    .velocity(
      {
        opacity: 1,
      },
      {
        delay: 13000,
        duration: 1000,
      }
    )
    .velocity(
      {
        top: window.innerHeight + 75,
      },
      {
        queue: false,
        delay: 13000,
        duration: 10000,
      }
    );
}

animate();
