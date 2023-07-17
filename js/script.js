const plane = document.getElementById('plane');
const skydiver = document.getElementById('skydiver');
const canvas = document.getElementById('canvas');
const clouds = document.getElementById('clouds');
const totalClouds = 50;

//random min-max
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function setClouds() {
  for (let i = 1; i <= totalClouds; i++) {
    let cloud = document.createElement('div');
    cloud.id = 'cloud' + i;
    cloud.classList.add('cloud' + random(1, 3));
    clouds.appendChild(cloud);

    //mengacak posisi awan
    cloud.style.left = random(-20, -window.innerWidth * 2) + 'px';
    cloud.style.top = random(0, window.innerHeight) + 'px';
    cloud.style.zIndex = random(1, 10);
  }
}

function setBG() {
  canvas.style.width = window.innerWidth + 'px';
  canvas.style.height = window.innerHeight * 2 + 'px';
  canvas.style.top = -window.innerHeight + 'px';
}

function animate() {
  plane
    .velocity(
      {
        right: '30vh',
        transform: ['rotate(10deg)', 'rotate(1deg)'],
      },
      {
        duration: 2000,
      }
    )
    .velocity(
      {
        top: '0px',
        left: '40%',
      },
      {
        duration: 8000,
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

  canvas.velocity(
    {
      top: '0px',
    },
    {
      queue: false,
      duration: 11000,
    }
  );

  for (let i = 1; i <= totalClouds; i++) {
    let duration = Math.abs(parseInt(document.getElementById('cloud' + i).style.left) / 100) * 2000;

    if (duration < 10000) {
      duration = random(10000, 15000);
    }
    document.getElementById('cloud' + i).velocity(
      {
        left: window.innerWidth,
      },
      {
        duration: duration,
      }
    );
  }
}

setClouds();
setBG();
animate();
