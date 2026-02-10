window.onload = function () {

  /* 🛑🛑🛑🛑🛑smooth scroll🛑🛑🛑🛑🛑 */
  const lenis = new Lenis({
    duration: 1.5,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smooth: true
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  gsap.ticker.add(() => {
    ScrollTrigger.update();
  });


  /* 🛑🛑🛑🛑🛑페이지 시작시 안내 문구 🛑🛑🛑🛑🛑 */
  const startPage = document.querySelector('.start');
  const popBtn = document.querySelector('.start .button');

  popBtn.addEventListener('click', () => {
    startPage.classList.add('active');
  })



  /* 🛑🛑🛑🛑🛑마우스 커서 따라다니는 우주선🛑🛑🛑🛑🛑 */
  const spaceShip = document.querySelector('.spaceship');
  document.addEventListener('mousemove', (e) => {

    gsap.to(spaceShip, {
      x: e.clientX - 50, /* 중심 위치 보정 */
      y: e.clientY - 50,
      duration: 3,
      ease: "power3.out"
    });
  });


  /* 🛑🛑🛑🛑🛑a 태그 scroll smooth🛑🛑🛑🛑🛑 */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      e.preventDefault();
      const targetId = anchor.getAttribute('href');
      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        lenis.scrollTo(targetEl);
      }
    });
  });


  /* 🛑🛑🛑🛑🛑background video scroll시 scale효과🛑🛑🛑🛑🛑 */
  gsap.registerPlugin(ScrollTrigger);

  gsap.fromTo(".video_background",
    {
      scale: 1 //시작값
    },
    {
      scale: 2,
      ease: "none",
      scrollTrigger: {
        trigger: "body",
        start: "10% top",
        end: "bottom top",
        scrub: 1,
        /* markers: true */
      }
    }
  );
  /* 🛑🛑🛑🛑🛑background video scroll시 점점 어두워지는 효과🛑🛑🛑🛑🛑 */
  gsap.fromTo(".video_background",
    {
      filter: 'brightness(0.5)'
    },
    {
      filter: 'brightness(1)',
      ease: "none",
      scrollTrigger: {
        trigger: "body",
        start: "10% top",
        end: "bottom top",
        scrub: 1,
        /* markers: true */
      }
    }
  );


  /* 🛑🛑🛑🛑🛑header 스크롤 이벤트🛑🛑🛑🛑🛑 */
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const nav = document.querySelector('.main_visual .nav');
    console.log(scrollY);
    if (scrollY > 980) {
      nav.classList.add('active');
    } else {
      nav.classList.remove('active');
    }
  });


  /* 🛑🛑🛑🛑🛑main_visual title 애니메이션🛑🛑🛑🛑🛑 */
  gsap.set('.main_visual .title', {
    z: -1100,
    opacity: 0
  });
  gsap.to('.main_visual .title', {
    z: 0,
    opacity: 1,
    scale: 1,
    duration: 1,
    ease: 'none',
  });
  gsap.to('.main_visual .title span', {

    'background-size': '100% 100%',
    scale: 1.1,
    rotationX: 1.2,
    duration: 2,
    ease: 'sine.inOut',
    repeat: -1, /* 무한 반복 */
    yoyo: true  /* 원상태 복귀 */
  })


  /* 🛑🛑🛑🛑🛑mind_section .text등장 애니메이션🛑🛑🛑🛑🛑 */

  gsap.registerPlugin(ScrollTrigger);

  gsap.fromTo('.mind_section .text_mind',
    {
      z: -800,
      opacity: 0,
      scale: 0.8
    },
    {
      scrollTrigger: {
        trigger: '.mind_section',
        start: 'top 30%',
        end: 'bottom top',
        scrub: false,
        toggleActions: 'play reverse play reverse',
        /* markers: true */
      },
      z: 0,
      opacity: 1,
      scale: 1,
      duration: 0.4,
      ease: 'none',
    }
  );


  /* 🛑🛑🛑🛑🛑aboutme섹션 h2 scroll 효과🛑🛑🛑🛑🛑 */
  ScrollTrigger.matchMedia({
    // ✅ 모바일 (768px 이하)
    "(max-width: 768px)": function () {
      gsap.fromTo('.about_me .inner .gsap_text h2',
        { 'background-size': '0% 100%' },
        {
          'background-size': '100% 100%',
          scrollTrigger: {
            trigger: '.about_me',
            pinnedContainer: '.about_me .inner',
            start: 'center 40%',
            end: 'bottom 80%',
            /* markers: true, */
            scrub: 1
          }
        }
      );
    },

    // ✅ 데스크탑 (501px 이상)
    "(min-width: 501px)": function () {
      gsap.fromTo('.about_me .inner .gsap_text h2',
        { 'background-size': '0% 100%' },
        {
          'background-size': '100% 100%',
          scrollTrigger: {
            trigger: '.about_me',
            pinnedContainer: '.about_me .inner',
            start: 'top 10%',
            end: '50% 50%',
            /* markers: true, */
            scrub: 1
          }
        }
      );
    }
  });


  /* 🛑🛑🛑🛑🛑mind_section .image등장 애니메이션🛑🛑🛑🛑🛑 */

  gsap.fromTo('.mind_section .image_mind',
    {
      z: -800,
      opacity: 0,
      scale: 0.8
    },
    {
      scrollTrigger: {
        trigger: '.mind_section',
        start: 'top 30%',
        end: 'bottom 30$',
        scrub: false,
        toggleActions: 'play reverse play reverse',
        /* markers: true */
      },
      z: 0,
      opacity: 1,
      scale: 1,
      duration: 1.0,
      ease: 'none',
    }
  );


  /* 🛑🛑🛑🛑🛑mind_section 이미지등장 애니메이션🛑🛑🛑🛑🛑 */

  mindText = document.querySelectorAll('.mind_section .sticky_box .text_mind p');
  mindImage = document.querySelectorAll('.mind_section .sticky_box .image_mind .image');

  mindText.forEach((p, index) => {
    p.addEventListener('mouseenter', () => {
      mindImage.forEach(img => img.classList.remove('active'));
      mindImage[index].classList.add('active');
    });

  })



  /* 🛑🛑🛑🛑🛑skills_section .text등장 애니메이션🛑🛑🛑🛑🛑 */

  gsap.set('.skills .title_skills', {
    opacity: 0,
    z: -800,
    scale: 0.8
  });

  gsap.to('.skills .title_skills', {
    scrollTrigger: {
      trigger: '.skills',
      start: 'top 10%',
      end: 'bottom center',
      scrub: false,
      toggleActions: 'play reverse play reverse',
      /* markers: true */
    },
    z: 0,
    opacity: 1,
    scale: 1,
    duration: 1,
    ease: 'none'
  });

  gsap.set('.skills .skills_wrap', {
    opacity: 0,
    z: -800,
    scale: 0.8
  });

  gsap.to('.skills .skills_wrap', {
    scrollTrigger: {
      trigger: '.skills',
      start: '30% top',
      end: 'bottom center',
      scrub: false,
      toggleActions: 'play reverse play reverse',
      /* markers: true */
    },
    z: 0,
    opacity: 1,
    scale: 1,
    duration: 1,
    ease: 'none'
  });


  /* 🛑🛑🛑🛑🛑skills_section .이미지 hover 시 텍스트 바뀜🛑🛑🛑🛑🛑 */
  skillImage = document.querySelectorAll('.skills .skills_wrap .skills_image img');
  skillText = document.querySelectorAll('.skills .skills_wrap .skills_text .text');

  skillImage.forEach((img, index) => {
    img.addEventListener('mouseenter', () => {
      img.classList.add('active');
      skillText[index].classList.add('active');
    });

    img.addEventListener('mouseleave', () => {
      img.classList.remove('active');
      skillText[index].classList.remove('active');
    });
  });


  /* 🛑🛑🛑🛑🛑project섹션 .이미지 rotateZ🛑🛑🛑🛑🛑 */
  gsap.fromTo('.project .inner .project_wrap .project_box',
    {
      transform: 'rotateZ(0)  rotateX(90deg)',
      opacity: 0,
      z: -800,
      scale: 0.8
    },
    {
      scrollTrigger: {
        trigger: '.project .project_wrap',
        start: 'top 55%',
        end: 'bottom 60%',
        scrub: false,
        toggleActions: 'play reverse play reverse',
        /* markers: true */
      },
      transform: 'rotateZ(0)',
      z: 0,
      opacity: 1,
      scale: 1,
      duration: 0.8,
      ease: 'none',
    }
  );


  /* 🛑🛑🛑🛑🛑clone섹션 .text mouseenter시  image opacity 1🛑🛑🛑🛑🛑 */
  let cloneText = document.querySelectorAll('.clone .clone_wrap .text_box');
  let cloneImage = document.querySelectorAll('.clone .clone_wrap .image_box');

  cloneText.forEach((div, index) => {
    div.addEventListener('mouseenter', () => {
      cloneImage[index].classList.add('active');
    })

    div.addEventListener('mouseleave', () => {
      cloneImage[index].classList.remove('active');
    })
  })


  /* 🛑🛑🛑🛑🛑clone섹션 scollTrigger 효과🛑🛑🛑🛑🛑 */
  gsap.fromTo('.clone .inner .clone_wrap',
    {
      transform: 'translateX(-50%)',
      opacity: 0,
      z: -800,
      scale: 0.8
    },
    {
      scrollTrigger: {
        trigger: '.clone',
        start: 'top 20%',
        end: 'bottom center',
        scrub: false,
        toggleActions: 'play reverse play reverse',
        /*  markers: true   */
      },
      transform: 'translateX(0)',
      z: 0,
      opacity: 1,
      scale: 1,
      duration: 0.8,
      ease: 'none',
    }
  );

  /* 🛑🛑🛑🛑🛑그래픽디자인 scroll 효과🛑🛑🛑🛑🛑 */

  gsap.fromTo('.design .design_wrap .img1',
    {
      left: '50%',
      top: 0,
      opacity: 0
    },
    {
      scrollTrigger: {
        trigger: '.design .design_wrap',
        start: 'top 80%',
        end: '10% 40%',
        scrub: 1,
        toggleActions: 'play reverse play reverse',
        /* markers: true */
      },
      left: '20%',
      top: '10%',
      duration: 0.8,
      opacity: 0.9
    }
  );

  gsap.fromTo('.design .design_wrap .img2',
    {
      left: '50%',
      top: 0,
      opacity: 0
    },
    {
      scrollTrigger: {
        trigger: '.design .design_wrap',
        start: 'top 80%',
        end: '10% 40%',
        scrub: 1,
        toggleActions: 'play reverse play reverse',
        /* markers: true */
      },
      left: '84%',
      top: '10%',
      duration: 0.8,
      opacity: 0.9
    }
  );

  gsap.fromTo('.design .design_wrap .img3',
    {
      left: '50%',
      top: '30%',
      opacity: 0
    },
    {
      scrollTrigger: {
        trigger: '.design .design_wrap',
        start: '15% top',
        end: '45% center',
        scrub: 1,
        toggleActions: 'play reverse play reverse',
        /* markers: true  */
      },
      left: '20%',
      top: '35%',
      duration: 0.8,
      opacity: 0.9
    }
  );

  gsap.fromTo('.design .design_wrap .img4',
    {
      left: '50%',
      top: '30%',
      opacity: 0
    },
    {
      scrollTrigger: {
        trigger: '.design .design_wrap',
        start: '15% 30%',
        end: '45% 40%',
        scrub: 1,
        toggleActions: 'play reverse play reverse',
        /* markers: true */
      },
      left: '84%',
      top: '35%',
      duration: 0.8,
      opacity: 0.9
    }
  );

  gsap.fromTo('.design .design_wrap .img5',
    {
      left: '50%',
      top: '60%',
      opacity: 0
    },
    {
      scrollTrigger: {
        trigger: '.design .design_wrap',
        start: '40% top',
        end: '55% top',
        scrub: 1,
        toggleActions: 'play reverse play reverse',
        /* markers: true */
      },
      left: '20%',
      top: '60%',
      duration: 0.8,
      opacity: 0.9
    }
  );

  gsap.fromTo('.design .design_wrap .img6',
    {
      left: '50%',
      top: '60%',
      opacity: 0
    },
    {
      scrollTrigger: {
        trigger: '.design .design_wrap',
        start: '40% top',
        end: '55% top',
        scrub: 1,
        toggleActions: 'play reverse play reverse',
        /* markers: true */
      },
      left: '84%',
      top: '60%',
      duration: 0.8,
      opacity: 0.9
    }
  );

  gsap.fromTo('.design .design_wrap .img7',
    {
      left: '50%',
      top: '20%',
      opacity: 0
    },
    {
      scrollTrigger: {
        trigger: '.design .design_wrap',
        start: 'top 80%',
        end: '30% top',
        scrub: 1,
        toggleActions: 'play reverse play reverse',
        /* markers: true */
      },
      duration: 0.5,
      opacity: 0.9
    }
  );
}
