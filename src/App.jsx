import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import {
  Lock,
  ChevronUp,
  Heart,
  Wifi,
  BatteryFull,
  Camera,
  MessageCircleHeart,
  Music2,
  Sparkles,
  CalendarDays,
  Gift,
  X,
  ChevronLeft,
  ChevronRight,
  ArrowLeft,
} from "lucide-react";

import "./App.css";

/* =====================================================
   LOCK SCREEN
===================================================== */

function LockScreen({ onUnlock }) {
  const [currentTime, setCurrentTime] =
    useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formattedTime =
    currentTime.toLocaleTimeString([], {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });

  return (
    <motion.div
      className="lock-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="bg-blur blur-one"></div>
      <div className="bg-blur blur-two"></div>

      <div className="flower flower-1">✿</div>
      <div className="flower flower-2">✿</div>
      <div className="flower flower-3">✿</div>
      <div className="flower flower-4">✿</div>
      <div className="flower flower-5">✿</div>

      <div className="status-bar">
        <span className="time">
          {formattedTime}
        </span>

        <div className="status-right">
          <span className="signal">▮▮▮</span>
          <Wifi size={16} />
          <BatteryFull size={18} />
          <span>100%</span>
        </div>
      </div>

      <div className="dynamic-island">
        <div className="island-camera"></div>
        <div className="island-sensor"></div>
      </div>

      <div className="birthday-content">

        <motion.div
          className="lock-icon"
          initial={{
            scale: 0,
            opacity: 0,
          }}
          animate={{
            scale: 1,
            opacity: 1,
          }}
          transition={{
            delay: 0.25,
            type: "spring",
            stiffness: 180,
          }}
        >
          <Lock
            size={28}
            strokeWidth={2.2}
          />
        </motion.div>

        <motion.div
          className="happy-text"
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.5,
          }}
        >
          Happy Birthday
        </motion.div>

        <motion.div
          className="small-heart"
          animate={{
            scale: [1, 1.12, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
        >
          ♡
        </motion.div>

        <motion.h1
          initial={{
            opacity: 0,
            y: 25,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.7,
          }}
        >
          Sangeetha
        </motion.h1>

        <motion.div
          className="birthday-date"
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 0.9,
          }}
        >
          24 · 09 · 2026
        </motion.div>

        <motion.div
          className="subtitle"
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 1.05,
          }}
        >
          <span>A BEAUTIFUL SOUL</span>
          <span>A BRIGHTER TOMORROW</span>
        </motion.div>

        <motion.div
          className="divider"
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 1.15,
          }}
        >
          <span></span>

          <Heart
            size={14}
            fill="currentColor"
          />

          <span></span>
        </motion.div>

        <motion.div
          className="glowing-heart"
          animate={{
            opacity: [0.7, 1, 0.7],
            scale: [1, 1.03, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
          }}
        >
          <div className="heart-shape"></div>
        </motion.div>

        <motion.div
          className="letter"
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 1.25,
          }}
        >
          <span>You</span>
          <span>Make</span>
          <span>Life</span>
          <span>Brighter</span>
          <span className="letter-heart">
            ♡
          </span>
        </motion.div>

        <motion.div
          className="birthday-notification"
          initial={{
            opacity: 0,
            y: 40,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 1.35,
            duration: 0.7,
          }}
        >
          <div className="notification-icon">
            <Heart
              size={27}
              fill="white"
            />
          </div>

          <div className="notification-content">
            <div className="notification-top">
              <strong>
                Birthday Surprise
              </strong>

              <span>now</span>
            </div>

            <p>
              Someone made something
              <br />
              special for you...
            </p>
          </div>
        </motion.div>

      </div>

      <motion.button
        className="unlock-button"
        onClick={onUnlock}
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          delay: 1.7,
        }}
        whileTap={{
          scale: 0.92,
        }}
      >
        <motion.div
          animate={{
            y: [-4, 4, -4],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
          }}
        >
          <ChevronUp
            size={32}
            strokeWidth={1.7}
          />
        </motion.div>

        <span>Tap to unlock</span>
      </motion.button>

      <div className="home-indicator"></div>
    </motion.div>
  );
}

/* =====================================================
   APP DATA
===================================================== */

const apps = [
  {
    id: "gallery",
    name: "Gallery",
    icon: Camera,
    description: "28 little pieces of us",
  },
  {
    id: "messages",
    name: "Messages",
    icon: MessageCircleHeart,
    description: "Words that mean everything",
  },
  {
    id: "music",
    name: "Music",
    icon: Music2,
    description: "A soundtrack for you",
  },
  {
    id: "memories",
    name: "Memories",
    icon: Sparkles,
    description: "Moments worth keeping",
  },
  {
    id: "timeline",
    name: "Timeline",
    icon: CalendarDays,
    description: "Our story, one day at a time",
  },
];

/* =====================================================
   HOME SCREEN
===================================================== */

function HomeScreen({
  exploredApps,
  secretUnlocked,
  onOpenApp,
}) {
  const [currentTime, setCurrentTime] =
    useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formattedTime =
    currentTime.toLocaleTimeString([], {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });

  const dateText =
    currentTime.toLocaleDateString([], {
      weekday: "long",
      month: "long",
      day: "numeric",
    });

  return (
    <motion.div
      className="home-screen"
      initial={{
        opacity: 0,
        scale: 1.05,
      }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      transition={{
        duration: 0.6,
      }}
    >
      <div className="home-glow home-glow-one"></div>
      <div className="home-glow home-glow-two"></div>

      <div className="home-status-bar">
        <span>{formattedTime}</span>

        <div className="home-status-right">
          <span>▮▮▮</span>
          <Wifi size={15} />
          <BatteryFull size={17} />
        </div>
      </div>

      <div className="dynamic-island home-island">
        <div className="island-camera"></div>
        <div className="island-sensor"></div>
      </div>

      <div className="home-scroll-content">

        <div className="home-header">

          <div>
            <p className="home-date">
              {dateText}
            </p>

            <h1>
              Hi, Sangeetha
              <span>♡</span>
            </h1>
          </div>

          <div className="profile-heart">
            <Heart
              size={22}
              fill="currentColor"
            />
          </div>

        </div>

        <motion.div
          className="birthday-card"
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.2,
          }}
        >
          <div className="card-glow"></div>

          <div className="card-small">
            YOUR SPECIAL DAY
          </div>

          <div className="card-date">
            24 · 09 · 2026
          </div>

          <div className="card-message">
            A little world made
            <br />
            just for you.
          </div>

          <div className="card-heart">
            <Heart
              size={34}
              fill="currentColor"
            />
          </div>
        </motion.div>

        <div className="apps-title">
          <span>YOUR APPS</span>

          <span className="progress-count">
            {exploredApps.size}/5 explored
          </span>
        </div>

        <div className="app-grid">

          {apps.map((app, index) => {
            const Icon = app.icon;

            const explored =
              exploredApps.has(app.id);

            return (
              <motion.button
                key={app.id}
                className={`app-card ${
                  explored
                    ? "app-explored"
                    : ""
                }`}
                onClick={() =>
                  onOpenApp(app.id)
                }
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay:
                    0.3 +
                    index * 0.08,
                }}
                whileTap={{
                  scale: 0.93,
                }}
              >
                <div className="app-icon">
                  <Icon
                    size={28}
                    strokeWidth={1.8}
                  />
                </div>

                <div className="app-name">
                  {app.name}
                </div>

                <div className="app-description">
                  {app.description}
                </div>

                {explored && (
                  <div className="explored-mark">
                    ✓
                  </div>
                )}
              </motion.button>
            );
          })}

          <AnimatePresence>
            {secretUnlocked && (
              <motion.button
                className="app-card secret-app"
                initial={{
                  opacity: 0,
                  scale: 0.5,
                  rotate: -8,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  rotate: 0,
                }}
                transition={{
                  type: "spring",
                  stiffness: 180,
                }}
                whileTap={{
                  scale: 0.92,
                }}
                onClick={() =>
                  onOpenApp("special")
                }
              >
                <div className="new-badge">
                  NEW
                </div>

                <div className="secret-glow"></div>

                <div className="app-icon secret-icon">
                  <Gift
                    size={29}
                    strokeWidth={1.8}
                  />
                </div>

                <div className="app-name">
                  Special
                </div>

                <div className="app-description">
                  Something just for you
                </div>
              </motion.button>
            )}
          </AnimatePresence>

        </div>

        <div className="exploration-message">
          {exploredApps.size < 5 ? (
            <>
              Explore all five apps
              <br />

              <span>
                Something special is waiting...
              </span>
            </>
          ) : (
            <>
              You found everything.
              <br />

              <span>
                Look closely... 💗
              </span>
            </>
          )}
        </div>

        <div className="home-bottom-space"></div>

      </div>

      <div className="home-dock">

        <div className="dock-icon">
          <Heart
            size={21}
            fill="currentColor"
          />
        </div>

        <div className="dock-icon">
          <MessageCircleHeart
            size={21}
          />
        </div>

        <div className="dock-icon">
          <Music2 size={21} />
        </div>

      </div>

      <div className="home-indicator"></div>

    </motion.div>
  );
}

/* =====================================================
   GALLERY
===================================================== */

function Gallery({ onBack }) {
  const [selectedPhoto, setSelectedPhoto] =
    useState(null);

  const [hearts, setHearts] =
    useState([]);

  const lastTapRef = useRef(0);

  const photos = Array.from(
    { length: 28 },
    (_, index) => {
      const number = String(
        index + 1
      ).padStart(2, "0");

      return {
        id: index,
        src: `/photos/photo${number}.jpg`,
        fallback: `/photos/photo${number}.jpeg`,
      };
    }
  );

  const openPhoto = (index) => {
    setSelectedPhoto(index);
  };

  const closePhoto = () => {
    setSelectedPhoto(null);
  };

  const nextPhoto = () => {
    setSelectedPhoto((current) => {
      if (current === null) {
        return current;
      }

      return (
        (current + 1) %
        photos.length
      );
    });
  };

  const previousPhoto = () => {
    setSelectedPhoto((current) => {
      if (current === null) {
        return current;
      }

      return (
        (current - 1 + photos.length) %
        photos.length
      );
    });
  };

  const handlePhotoTap = (
    event,
    index
  ) => {
    const now = Date.now();

    const timeSinceLastTap =
      now - lastTapRef.current;

    if (
      timeSinceLastTap < 300
    ) {
      const rect =
        event.currentTarget.getBoundingClientRect();

      const heart = {
        id:
          now +
          Math.random(),

        photoIndex: index,

        x:
          event.clientX -
          rect.left,

        y:
          event.clientY -
          rect.top,
      };

      setHearts((previous) => [
        ...previous,
        heart,
      ]);

      setTimeout(() => {
        setHearts((previous) =>
          previous.filter(
            (item) =>
              item.id !== heart.id
          )
        );
      }, 1000);

      lastTapRef.current = 0;

      return;
    }

    lastTapRef.current = now;

    setTimeout(() => {
      if (
        Date.now() -
          lastTapRef.current >=
        280
      ) {
        openPhoto(index);
      }
    }, 300);
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (selectedPhoto === null) {
        return;
      }

      if (event.key === "Escape") {
        closePhoto();
      }

      if (
        event.key === "ArrowLeft"
      ) {
        previousPhoto();
      }

      if (
        event.key === "ArrowRight"
      ) {
        nextPhoto();
      }
    };

    window.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () => {
      window.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, [selectedPhoto]);

  return (
    <motion.div
      className="gallery-page"
      initial={{
        opacity: 0,
        x: 50,
      }}
      animate={{
        opacity: 1,
        x: 0,
      }}
      exit={{
        opacity: 0,
        x: -50,
      }}
    >

      <div className="gallery-header">

        <button
          className="gallery-back"
          onClick={onBack}
        >
          <ArrowLeft size={21} />
        </button>

        <div>
          <h1>Gallery</h1>

          <p>
            28 little pieces of us
          </p>
        </div>

        <div className="gallery-count">
          28
        </div>

      </div>

      <div className="gallery-scroll">

        <div className="gallery-grid">

          {photos.map(
            (photo, index) => (
              <motion.button
                key={photo.id}
                className="gallery-photo"
                onClick={(event) =>
                  handlePhotoTap(
                    event,
                    index
                  )
                }
                whileTap={{
                  scale: 0.94,
                }}
              >

                <img
                  src={photo.src}
                  alt={`Memory ${
                    index + 1
                  }`}
                  onError={(event) => {
                    if (
                      event.currentTarget.src.endsWith(
                        ".jpg"
                      )
                    ) {
                      event.currentTarget.src =
                        photo.fallback;
                    }
                  }}
                />

                <span className="photo-number">
                  {String(
                    index + 1
                  ).padStart(2, "0")}
                </span>

                <AnimatePresence>
                  {hearts
                    .filter(
                      (heart) =>
                        heart.photoIndex ===
                        index
                    )
                    .map(
                      (heart) => (
                        <motion.div
                          key={
                            heart.id
                          }
                          className="floating-heart"
                          style={{
                            left:
                              heart.x,
                            top:
                              heart.y,
                          }}
                          initial={{
                            opacity: 1,
                            scale: 0.5,
                            x: "-50%",
                            y: "-50%",
                          }}
                          animate={{
                            opacity: 0,
                            scale: 1.4,
                            x: "-50%",
                            y: "-150%",
                          }}
                          transition={{
                            duration: 1,
                          }}
                        >
                          ❤️
                        </motion.div>
                      )
                    )}
                </AnimatePresence>

              </motion.button>
            )
          )}

        </div>

        <div className="gallery-bottom-text">
          <span>♡</span>

          <p>
            28 moments.
            <br />
            Countless memories.
          </p>

          <span>♡</span>
        </div>

      </div>

      <AnimatePresence>

        {selectedPhoto !== null && (

          <motion.div
            className="photo-viewer"
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
          >

            <div className="viewer-top">

              <button
                className="viewer-close"
                onClick={
                  closePhoto
                }
              >
                <X size={23} />
              </button>

              <span>
                {selectedPhoto + 1} /{" "}
                {photos.length}
              </span>

              <div></div>

            </div>

            <motion.img
              key={selectedPhoto}
              src={
                photos[
                  selectedPhoto
                ].src
              }
              alt={`Memory ${
                selectedPhoto + 1
              }`}
              className="viewer-image"
              onError={(event) => {
                if (
                  event.currentTarget.src.endsWith(
                    ".jpg"
                  )
                ) {
                  event.currentTarget.src =
                    photos[
                      selectedPhoto
                    ].fallback;
                }
              }}
            />

            <button
              className="viewer-arrow viewer-left"
              onClick={
                previousPhoto
              }
            >
              <ChevronLeft size={28} />
            </button>

            <button
              className="viewer-arrow viewer-right"
              onClick={
                nextPhoto
              }
            >
              <ChevronRight size={28} />
            </button>

            <div className="viewer-bottom">

              <Heart
                size={19}
                fill="currentColor"
              />

              <span>
                Double tap for a little love
              </span>

            </div>

          </motion.div>
        )}

      </AnimatePresence>

    </motion.div>
  );
}

/* =====================================================
   MESSAGES
===================================================== */

function MessagesApp({ onBack }) {
  const messages = [
    {
      id: 1,
      text: "Hey Sangeetha ❤️",
      time: "11:58 PM",
    },
    {
      id: 2,
      text: "Do you know how special you are?",
      time: "11:59 PM",
    },
    {
      id: 3,
      text: "Probably not enough.",
      time: "12:00 AM",
    },
    {
      id: 4,
      text: "So I made this little place just for you.",
      time: "12:00 AM",
    },
    {
      id: 5,
      text: "A place filled with our memories, little moments and everything that makes you smile.",
      time: "12:01 AM",
    },
    {
      id: 6,
      text: "And today is all about celebrating YOU. 💗",
      time: "12:02 AM",
    },
    {
      id: 7,
      text: "Happy Birthday, Sangeetha ❤️",
      time: "12:03 AM",
    },
  ];

  return (
    <motion.div
      className="messages-page"
      initial={{
        opacity: 0,
        x: 30,
      }}
      animate={{
        opacity: 1,
        x: 0,
      }}
      exit={{
        opacity: 0,
        x: -30,
      }}
    >

      <div className="messages-header">

        <button
          className="back-button"
          onClick={onBack}
        >
          <ArrowLeft size={22} />
        </button>

        <div className="messages-profile">

          <div className="messages-avatar">
            S
          </div>

          <div className="messages-profile-info">

            <strong>
              Jebin
            </strong>

            <span>
              always in my heart
            </span>

          </div>

        </div>

        <div className="messages-heart">
          <Heart
            size={19}
            fill="currentColor"
          />
        </div>

      </div>

      <div className="messages-date">
        <span>
          24 September 2026
        </span>
      </div>

      <div className="messages-chat">

        <motion.div
          className="chat-intro"
          initial={{
            opacity: 0,
            y: 10,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
        >
          <Heart
            size={25}
            fill="currentColor"
          />

          <span>
            A conversation
            <br />
            made with love
          </span>
        </motion.div>

        {messages.map(
          (message, index) => (
            <motion.div
              key={message.id}
              className="message-wrapper received"
              initial={{
                opacity: 0,
                y: 12,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay:
                  0.3 +
                  index * 0.35,
              }}
            >
              <div className="message-bubble">
                {message.text}
              </div>

              <div className="message-time">
                {message.time}
              </div>
            </motion.div>
          )
        )}

        <motion.div
          className="message-ending"
          initial={{
            opacity: 0,
            scale: 0.8,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            delay: 3,
          }}
        >
          <Heart
            size={38}
            fill="currentColor"
          />

          <span>
            Made especially
            <br />
            for you ❤️
          </span>
        </motion.div>

      </div>

      <div className="message-input-area">

        <div className="fake-input">

          <span>
            A little message for you...
          </span>

          <Heart
            size={18}
            fill="currentColor"
          />

        </div>

      </div>

      <div className="home-indicator"></div>

    </motion.div>
  );
}

/* =====================================================
   MUSIC APP
===================================================== */

function MusicApp({ onBack }) {
  const audioRef = useRef(null);

  const [isPlaying, setIsPlaying] =
    useState(false);

  const [currentTime, setCurrentTime] =
    useState(0);

  const [duration, setDuration] =
    useState(225);

  const [audioError, setAudioError] =
    useState(false);

  const [audioLoaded, setAudioLoaded] =
    useState(false);

  // ==========================================
  // AUTO PLAY WHEN MUSIC APP OPENS
  // ==========================================

  useEffect(() => {
    const startMusic = async () => {
      if (!audioRef.current) {
        return;
      }

      try {
        await audioRef.current.play();

        setIsPlaying(true);
        setAudioError(false);
      } catch (error) {
        console.log(
          "Autoplay was blocked. Press Play to start the song."
        );

        setIsPlaying(false);
      }
    };

    const timer = setTimeout(() => {
      startMusic();
    }, 500);

    return () => {
      clearTimeout(timer);

      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
    };
  }, []);

  // ==========================================
  // PLAY / PAUSE
  // ==========================================

  const togglePlay = async () => {
  if (!audioRef.current) {
    console.error("Audio element not found");
    return;
  }

  console.log("Audio source:", audioRef.current.src);
  console.log("Audio readyState:", audioRef.current.readyState);
  console.log("Audio networkState:", audioRef.current.networkState);

  try {
    if (audioRef.current.paused) {
      await audioRef.current.play();

      setIsPlaying(true);
      setAudioError(false);

      console.log("Music started successfully");
    } else {
      audioRef.current.pause();

      setIsPlaying(false);

      console.log("Music paused");
    }
  } catch (error) {
    console.error("PLAY ERROR:", error);

    setIsPlaying(false);
    setAudioError(true);
  }
};

  // ==========================================
  // AUDIO LOADED
  // ==========================================

  const handleLoadedMetadata = () => {
    if (
      audioRef.current &&
      Number.isFinite(
        audioRef.current.duration
      )
    ) {
      setDuration(
        audioRef.current.duration
      );

      setAudioLoaded(true);
      setAudioError(false);
    }
  };

  // ==========================================
  // AUDIO PROGRESS
  // ==========================================

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(
        audioRef.current.currentTime
      );
    }
  };

  // ==========================================
  // AUDIO ENDED
  // ==========================================

  const handleEnded = () => {
    setIsPlaying(false);
    setCurrentTime(0);

    if (audioRef.current) {
      audioRef.current.currentTime = 0;
    }
  };

  // ==========================================
  // PROGRESS BAR
  // ==========================================

  const handleProgressChange = (
    event
  ) => {
    const value =
      Number(event.target.value);

    setCurrentTime(value);

    if (audioRef.current) {
      audioRef.current.currentTime =
        value;
    }
  };

  // ==========================================
  // REWIND 10 SECONDS
  // ==========================================

  const rewind = () => {
    if (!audioRef.current) {
      return;
    }

    audioRef.current.currentTime =
      Math.max(
        0,
        audioRef.current.currentTime - 10
      );

    setCurrentTime(
      audioRef.current.currentTime
    );
  };

  // ==========================================
  // FORWARD 10 SECONDS
  // ==========================================

  const forward = () => {
    if (!audioRef.current) {
      return;
    }

    audioRef.current.currentTime =
      Math.min(
        duration,
        audioRef.current.currentTime + 10
      );

    setCurrentTime(
      audioRef.current.currentTime
    );
  };

  // ==========================================
  // TIME FORMAT
  // ==========================================

  const formatTime = (seconds) => {
    if (
      !seconds ||
      isNaN(seconds)
    ) {
      return "0:00";
    }

    const minutes =
      Math.floor(seconds / 60);

    const remaining =
      Math.floor(seconds % 60);

    return `${minutes}:${String(
      remaining
    ).padStart(2, "0")}`;
  };

  // ==========================================
  // UI
  // ==========================================

  return (
    <motion.div
      className="music-page"
      initial={{
        opacity: 0,
        x: 40,
      }}
      animate={{
        opacity: 1,
        x: 0,
      }}
      exit={{
        opacity: 0,
        x: -40,
      }}
      transition={{
        duration: 0.45,
      }}
    >

      {/* ======================================
          BACK BUTTON
      ====================================== */}

      <button
        className="music-back"
        onClick={onBack}
        aria-label="Go back"
      >
        <ArrowLeft size={28} />
      </button>


      {/* ======================================
          NOW PLAYING
      ====================================== */}

      <div className="music-title">

        <span>
          NOW PLAYING
        </span>

        <Music2
          size={25}
          strokeWidth={2}
        />

      </div>


      {/* ======================================
          SPECIAL PHOTO
      ====================================== */}

      <motion.div
        className={`music-art ${
          isPlaying
            ? "music-art-playing"
            : ""
        }`}
        animate={
          isPlaying
            ? {
                rotate: 360,
              }
            : {
                rotate: 0,
              }
        }
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear",
        }}
      >

        <div className="music-ring ring-one"></div>

        <div className="music-ring ring-two"></div>

        <div className="music-ring ring-three"></div>


        <div className="music-particles">
          <span>✦</span>
          <span>·</span>
          <span>✦</span>
          <span>·</span>
          <span>✦</span>
          <span>·</span>
          <span>✦</span>
        </div>


        {/* SPECIAL PHOTO */}

        <div className="music-photo-frame">

          <img
            src="/photos/special101.jpg"
            alt="Special memory"
            className="music-special-photo"
            onError={(event) => {
              console.error(
                "Special photo could not be loaded:",
                event.currentTarget.src
              );
            }}
          />

        </div>

      </motion.div>


      {/* ======================================
          SONG DETAILS
      ====================================== */}

      <div className="music-details">

        <h1>
          Our Song
        </h1>

        <p>
          A little soundtrack for you
        </p>

      </div>


      {/* ======================================
          AUDIO
      ====================================== */}

      <audio
  ref={audioRef}
  preload="auto"
  src="/music/birthday-song.mp3"

  onLoadedMetadata={(event) => {
    console.log(
      "Audio metadata loaded:",
      event.currentTarget.duration
    );

    setAudioLoaded(true);
    setAudioError(false);

    handleLoadedMetadata();
  }}

  onCanPlay={() => {
    console.log("Audio can play");

    setAudioLoaded(true);
    setAudioError(false);
  }}

  onPlay={() => {
    console.log("Audio PLAY event");

    setIsPlaying(true);
  }}

  onPause={() => {
    console.log("Audio PAUSE event");

    setIsPlaying(false);
  }}

  onTimeUpdate={handleTimeUpdate}

  onEnded={handleEnded}

  onError={(event) => {
    const audio = event.currentTarget;

    console.error(
      "AUDIO ERROR:",
      audio.error
    );

    setAudioLoaded(false);
    setAudioError(true);
    setIsPlaying(false);
  }}
/>


      {/* ======================================
          PROGRESS
      ====================================== */}

      <div className="music-progress">

        <input
          type="range"
          min="0"
          max={duration || 225}
          step="0.01"
          value={Math.min(
            currentTime,
            duration || 225
          )}
          onChange={
            handleProgressChange
          }
        />

        <div className="music-time">

          <span>
            {formatTime(currentTime)}
          </span>

          <span>
            {formatTime(duration)}
          </span>

        </div>

      </div>


      {/* ======================================
          CONTROLS
      ====================================== */}

      <div className="music-controls">

        {/* REWIND */}

        <button
          className="music-skip"
          onClick={rewind}
          aria-label="Rewind 10 seconds"
        >

          <span className="skip-arrow">
            ↶
          </span>

          <small>
            10
          </small>

        </button>


        {/* PLAY / PAUSE */}

        <button
          className="music-play"
          onClick={togglePlay}
          aria-label={
            isPlaying
              ? "Pause"
              : "Play"
          }
        >

          {isPlaying ? (

            <span className="pause-icon">
              ❚❚
            </span>

          ) : (

            <span className="play-icon">
              ▶
            </span>

          )}

        </button>


        {/* FORWARD */}

        <button
          className="music-skip"
          onClick={forward}
          aria-label="Forward 10 seconds"
        >

          <span className="skip-arrow">
            ↷
          </span>

          <small>
            10
          </small>

        </button>

      </div>


      {/* ======================================
          BOTTOM HEART
      ====================================== */}

      <motion.div
        className="music-bottom-heart"

        animate={{
          scale: isPlaying
            ? [1, 1.12, 1]
            : 1,

          opacity: isPlaying
            ? [0.65, 1, 0.65]
            : 0.7,
        }}

        transition={{
          duration: 1.8,
          repeat: Infinity,
        }}
      >

        <Heart
          size={31}
          fill="currentColor"
          strokeWidth={1.5}
        />

      </motion.div>


      {/* ======================================
          QUOTE
      ====================================== */}

      {/* Romantic Music Message */}

<div className="music-romantic-message">

  <div className="music-romantic-divider">
    <span></span>

    <Heart
      size={15}
      fill="currentColor"
    />

    <span></span>
  </div>

  <p>
    Every song reminds me
    <br />
    of a moment with you.
  </p>

  <div className="music-romantic-divider bottom">
    <span></span>

    <Heart
      size={14}
      fill="none"
    />

    <span></span>
  </div>

</div>

      {/* ======================================
          AUDIO ERROR
      ====================================== */}

      {audioError && (

        <div className="music-error">

          <span>
            Unable to load the song.
          </span>

          <strong>
            Check that the file is exactly:
          </strong>

          <small>
            public/music/birthday-song.mp3
          </small>

        </div>

      )}


      {/* ======================================
          HOME INDICATOR
      ====================================== */}

      <div className="home-indicator"></div>

    </motion.div>
  );
}

/* =====================================================
   GENERIC APP PLACEHOLDER
===================================================== */

function AppPlaceholder({
  appId,
  onBack,
}) {
  const app =
    apps.find(
      (item) =>
        item.id === appId
    );

  const Icon =
    app?.icon || Gift;

  return (
    <motion.div
      className="app-page"
      initial={{
        opacity: 0,
        x: 40,
      }}
      animate={{
        opacity: 1,
        x: 0,
      }}
      exit={{
        opacity: 0,
        x: -40,
      }}
    >

      <button
        className="back-button"
        onClick={onBack}
      >
        <ArrowLeft size={21} />
      </button>

      <div className="app-page-icon">
        <Icon size={38} />
      </div>

      <h1>
        {app?.name}
      </h1>

      <p>
        {app?.description}
      </p>

      <div className="coming-soon">
        This app is being prepared...
        <br />
        💗
      </div>

    </motion.div>
  );
}
function MemoriesApp({ onBack }) {
  const videoRef = useRef(null);
  const [videoReady, setVideoReady] = useState(false);

  /* Automatically play the memory video when the app opens */
  useEffect(() => {
    const startVideo = async () => {
      if (!videoRef.current) return;

      try {
        await videoRef.current.play();
      } catch (error) {
        console.log("Autoplay was blocked by the browser.");
      }
    };

    const timer = setTimeout(startVideo, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      className="memories-page"
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -40 }}
      transition={{ duration: 0.35 }}
    >

      {/* Header */}
      <div className="memories-header">

        <button
          className="memories-back"
          onClick={onBack}
          aria-label="Go back"
        >
          <ArrowLeft size={20} />
        </button>

        <div className="memories-heading">
          <span>OUR MOMENTS</span>
          <h1>Memories</h1>
        </div>

        <div className="memories-heart">
          <Heart size={18} fill="currentColor" />
        </div>

      </div>


      {/* Scroll Content */}
      <div className="memories-scroll">

        {/* Intro */}
        <div className="memories-intro">

          <motion.div
            className="memories-intro-heart"
            animate={{
              scale: [1, 1.08, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          >
            <Heart
              size={28}
              fill="currentColor"
            />
          </motion.div>

          <h2>
            Moments worth keeping
          </h2>

          <p>
            Some memories become even more
            precious when distance becomes part
            of the story.
          </p>

        </div>


        {/* =================================================
            PORTRAIT MEMORY VIDEO
           ================================================= */}

        <motion.div
          className="memory-video-card"
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
          }}
        >

          <div className="memory-video-wrapper">

            <video
              ref={videoRef}
              className="memory-video"
              controls
              playsInline
              preload="auto"
              autoPlay
              onLoadedData={() => {
                setVideoReady(true);

                if (videoRef.current) {
                  videoRef.current
                    .play()
                    .catch(() => {
                      console.log(
                        "Autoplay was blocked by the browser."
                      );
                    });
                }
              }}
              onError={() => {
                setVideoReady(false);
              }}
            >
              <source
                src="/videos/memory-video.mp4"
                type="video/mp4"
              />

              Your browser does not support
              the video element.
            </video>


            {/* Loading placeholder */}
            {!videoReady && (
              <div className="memory-video-placeholder">

                <div className="memory-play-icon">
                  <span></span>
                </div>

                <p>Your memory video</p>

                <span>
                  Loading your special moment...
                </span>

              </div>
            )}

          </div>


          {/* =================================================
              PERSONAL BIRTHDAY LETTER
             ================================================= */}

          <div className="memory-video-info">

            <div className="memory-video-label">
              Happy Birthday, my love ❤️🎂
            </div>


            <p>
              Even though we are miles apart today, you are
              always the closest person to my heart. I wish I
              could be there beside you, hold your hand, look
              into your eyes, and celebrate your special day
              with you. But until that day comes, please
              remember that distance can never change how
              deeply I love you.
            </p>


            <p>
              You are not just my girlfriend; you are my
              happiness, my comfort, my favourite person, and
              the one I want to share my future with. Every
              day, I miss your smile, your voice, and all those
              little things that make you so special to me.
            </p>


            <p>
              On your birthday, I wish you endless happiness,
              beautiful memories, and all the dreams you
              deserve. And I promise, no matter how many miles
              are between us, my heart will always find its way
              to you. ❤️
            </p>


            <p>
              I can't wait for the day when we don't have to
              celebrate birthdays through a screen anymore.
              Until then, keep my love close to your heart,
              just as I keep you close to mine.
            </p>


            <p>
              Happy Birthday, my beautiful love. ❤️🥰
              <br />
              I miss you, I love you, and I’m counting the days
              until I can hold you in my arms again. ❤️
            </p>


            <p className="memory-signature">
              Forever yours. ❤️
            </p>

          </div>

        </motion.div>


        {/* Small memory note */}
        <motion.div
          className="memory-note"
          initial={{
            opacity: 0,
            y: 15,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.25,
          }}
        >

          <Sparkles size={18} />

          <span>
            Distance may change the place,
            but never the memories.
          </span>

        </motion.div>


        <div className="memories-bottom-space" />

      </div>


      {/* Home Indicator */}
      <div className="home-indicator" />

    </motion.div>
  );
}
function SpecialApp({ onBack }) {
  const [password, setPassword] = useState("");
  const [stage, setStage] = useState("password");
  const [error, setError] = useState("");
  const [videoReady, setVideoReady] = useState(false);
  const videoRef = useRef(null);
  // TEMPORARY PASSWORD - change this later
  const SPECIAL_PASSWORD = "LOVE";
  useEffect(() => {
  if (stage !== "video") return;

  const startVideo = async () => {
    if (!videoRef.current) return;

    try {
      await videoRef.current.play();
    } catch (error) {
      console.log("Autoplay was blocked by the browser:", error);
    }
  };

  const timer = setTimeout(startVideo, 300);

  return () => clearTimeout(timer);
}, [stage]);

  const handlePasswordSubmit = () => {
    const enteredPassword = password.trim().toUpperCase();

    if (!enteredPassword) {
      setError("Enter the secret password 💗");
      return;
    }

    if (enteredPassword === SPECIAL_PASSWORD) {
      setError("");
      setTimeout(() => setStage("video"), 450);
    } else {
      setError("That's not the secret password 💗");
      setPassword("");
    }
  };

  if (stage === "password") {
    return (
      <motion.div
        className="special-page special-password-page"
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 1.03 }}
        transition={{ duration: 0.45 }}
      >
        <motion.button
          className="special-back"
          onClick={onBack}
          whileTap={{ scale: 0.9 }}
          aria-label="Go back"
        >
          <ArrowLeft size={21} />
        </motion.button>

        <div className="special-background-glow" />

        <div className="special-content">
          <motion.div
            className="special-lock"
            animate={{ y: [-5, 5, -5], rotate: [-2, 2, -2] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <Lock size={30} />
          </motion.div>

          <motion.span
            className="special-label"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
          >
            ONE LAST SECRET
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
          >
            Something Special
          </motion.h1>

          <motion.p
            className="special-description"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35 }}
          >
            You've found the last little secret.
            <br />
            But there's one more thing waiting.
          </motion.p>

          <motion.div
            className="special-divider"
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ delay: 0.45 }}
          >
            <span />
            <Heart size={14} fill="currentColor" />
            <span />
          </motion.div>

          <motion.p
            className="special-question"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            Do you know the secret?
          </motion.p>

          <motion.div
            className={`special-input-wrapper ${error ? "special-input-error" : ""}`}
            animate={error ? { x: [-5, 5, -5, 5, 0] } : {}}
            transition={{ duration: 0.3 }}
          >
            <Lock size={17} />
            <input
              type="password"
              value={password}
              onChange={(event) => {
                setPassword(event.target.value);
                setError("");
              }}
              onKeyDown={(event) => {
                if (event.key === "Enter") {
                  handlePasswordSubmit();
                }
              }}
              placeholder="Enter password"
              autoComplete="off"
            />
          </motion.div>

          <AnimatePresence>
            {error && (
              <motion.p
                className="special-error"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
              >
                {error}
              </motion.p>
            )}
          </AnimatePresence>

          <motion.button
            className="special-unlock-button"
            onClick={handlePasswordSubmit}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
          >
            <span>Unlock My Surprise</span>
            <Heart size={17} fill="currentColor" />
          </motion.button>

          <motion.p
            className="special-hint"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            Made with love, just for you ♡
          </motion.p>
        </div>

        <div className="home-indicator" />
      </motion.div>
    );
  }

  // ==========================================
// SPECIAL VIDEO
// ==========================================

if (stage === "video") {
  return (
    <motion.div
      className="special-page special-video-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.7 }}
    >
      <div className="special-video-content">

        {/* HEADER */}
        <div className="special-video-header">
          <button
            className="special-video-back"
            onClick={onBack}
            aria-label="Go back"
          >
            <ArrowLeft size={22} />
          </button>

          <div className="special-video-header-title">
            <span>JUST FOR YOU</span>
            <strong>A Little Surprise</strong>
          </div>

          <Heart
            className="special-header-heart"
            size={21}
            fill="currentColor"
          />
        </div>

        {/* TOP DIVIDER */}
        <div className="special-top-divider">
          <span />
          <Heart size={14} fill="currentColor" />
          <span />
        </div>

        {/* INTRO */}
        <motion.div
          className="special-video-intro"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span>TAKE A MOMENT</span>

          <h1>
            This one's for you
            <span className="intro-heart">❤</span>
          </h1>

          <p>
            Sometimes the best words
            <br />
            are in a video...
          </p>
        </motion.div>

        {/* PORTRAIT VIDEO */}
        <motion.div
          className="special-portrait-video-wrapper"
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.4,
            ease: "easeOut",
          }}
        >
          <video
            ref={videoRef}
            className="special-portrait-video"
            controls
            playsInline
            preload="auto"
            autoPlay
            onLoadedData={() => {
              setVideoReady(true);

              if (videoRef.current) {
                videoRef.current.play().catch(() => {});
              }
            }}
            onEnded={() => {
              setStage("reveal");
            }}
            onError={() => {
              setVideoReady(false);
            }}
          >
            <source
              src="/videos/special-video.mp4"
              type="video/mp4"
            />

            Your browser does not support the video element.
          </video>

          {!videoReady && (
            <div className="special-video-placeholder">
              <motion.div
                className="special-video-heart"
                animate={{
                  scale: [1, 1.06, 1],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Heart size={36} fill="currentColor" />
              </motion.div>

              <h3>Your special video</h3>

              <p>Your surprise will appear here.</p>

              
            </div>
          )}
        </motion.div>

        {/* NOTE */}
        <motion.p
          className="special-video-note"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.8,
          }}
        >
          Take your time.
          <br />
          This moment is just for you.
        </motion.p>

        {/* BOTTOM DIVIDER */}
        <div className="special-bottom-divider">
          <span />
          <Heart size={15} fill="currentColor" />
          <span />
        </div>

        <div className="special-symbols">
          <span>♡</span>
          <span>✦</span>
          <span>♡</span>
        </div>

        <div className="special-video-bottom-space" />

      </div>

      {/* PHONE HOME INDICATOR */}
      <div className="home-indicator" />
    </motion.div>
  );
}
  return (
    <motion.div
      className="special-page final-reveal-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
    >
      <motion.div
        className="final-glow"
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{ duration: 4, repeat: Infinity }}
      />

      <div className="final-floating-hearts">
        <motion.span
          animate={{ y: [-10, -55], opacity: [0, 1, 0], x: [-10, 10] }}
          transition={{ duration: 3.5, repeat: Infinity }}
        >
          ♡
        </motion.span>
        <motion.span
          animate={{ y: [-5, -70], opacity: [0, 1, 0], x: [5, -12] }}
          transition={{ duration: 4, repeat: Infinity, delay: 1 }}
        >
          ♡
        </motion.span>
        <motion.span
          animate={{ y: [-5, -60], opacity: [0, 1, 0], x: [-5, 15] }}
          transition={{ duration: 3.8, repeat: Infinity, delay: 2 }}
        >
          ♡
        </motion.span>
      </div>

      <motion.div
        className="final-heart"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8, type: "spring" }}
      >
        <Heart size={53} fill="currentColor" />
      </motion.div>

      <motion.span
        className="final-small-text"
        initial={{ opacity: 0, letterSpacing: "8px" }}
        animate={{ opacity: 1, letterSpacing: "3px" }}
        transition={{ delay: 0.9, duration: 0.8 }}
      >
        HAPPY BIRTHDAY
      </motion.span>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.1, duration: 0.7 }}
      >
        Sangeetha
      </motion.h1>

      <motion.div
        className="final-divider"
        initial={{ opacity: 0, scaleX: 0 }}
        animate={{ opacity: 1, scaleX: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
      >
        <span />
        <Heart size={13} fill="currentColor" />
        <span />
      </motion.div>

      <motion.div
  className="final-message-card"
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.9, delay: 0.7 }}
>
  <p>Happy Birthday, my love ❤️🎂</p>

  <p>
    57 days to go… ❤️💍
  </p>

  <p>
    The distance may keep us apart for a little longer, but every sunrise brings us one day closer to each other. ❤️  
  </p>

  <p>
    Only 57 more days until the distance becomes a memory, until “I miss you” becomes “I’m right here,” and until I can finally hold your hand and call you my wife. 💕
  </p>

  <p>
    We have waited, loved, missed each other, and held on through the distance. Now, our forever is just 57 days away. ❤️
  </p>

  <p>
    Happy Birthday, my beautiful love. ❤️🥰
    <br></br>
    <br />
    57 days… 57 little steps closer to our forever. 💍❤️
I love you today, I’ll love you tomorrow, and I’ll love you for all the days of our life together. 🥰
  </p>

  <div className="final-signature">
    Forever yours. ❤️
  </div>
</motion.div>
      <motion.div
        className="final-love"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2.5, duration: 0.6 }}
      >
        
      </motion.div>

      <motion.button
        className="final-close-button"
        onClick={onBack}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3 }}
        whileTap={{ scale: 0.95 }}
      >
        Back to Home
      </motion.button>

      <div className="home-indicator" />
    </motion.div>
  );
}

function TimelineApp({ onBack }) {
  const events = [
    {
      date: "17 · 12 · 2024",
      title: "The Beginning",
      icon: "♡",
      text: "The day our story began. A date that quietly became one of the most important days in our story.",
    },
    {
      date: "17 · 12 · 2025",
      title: "First Gift",
      icon: "🎁",
      text: "Our first gift and a special day. One more beautiful memory added to our story.",
    },
    {
      date: "09 · 01 · 2026",
      title: "Engagement Day",
      icon: "💍",
      text: "A beautiful day, a beautiful promise, and another unforgettable chapter of our journey.",
    },
    {
      date: "13 · 01 · 2026",
      title: "Before The Distance",
      icon: "♡",
      text: "The day before life took us into a long-distance chapter. A moment worth keeping close to the heart.",
    },
  ];

  return (
    <motion.div
      className="timeline-page"
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -40 }}
      transition={{ duration: 0.4 }}
    >

      {/* HEADER */}
      <div className="timeline-header">

        <button
          className="timeline-back"
          onClick={onBack}
          aria-label="Back"
        >
          <ArrowLeft size={22} />
        </button>

        <div className="timeline-heading">

          <span>OUR STORY</span>

          <h1>Timeline</h1>

          <p>
            The moments that became
            <br />
            part of our story.
          </p>

        </div>

        <div className="timeline-heart">
          <Heart
            size={17}
            fill="currentColor"
          />
        </div>

      </div>

      {/* SCROLLABLE CONTENT */}
      <div className="timeline-scroll">

        {/* INTRO */}
        <div className="timeline-intro">

          <div className="timeline-intro-icon">
            <Heart
              size={21}
              fill="currentColor"
            />
          </div>

          <p>
            Some dates are just dates.
            <br />
            Some become memories.
          </p>

        </div>

        {/* TIMELINE */}
        <div className="timeline-container">

          <div className="timeline-line"></div>

          {events.map((event, index) => (
            <motion.div
              key={event.date}
              className={`timeline-item ${
                index % 2 === 0
                  ? "timeline-left"
                  : "timeline-right"
              }`}
              initial={{
                opacity: 0,
                y: 25,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.45,
                delay: index * 0.08,
              }}
            >

              {/* NODE */}
              <div className="timeline-node">
                <span>{event.icon}</span>
              </div>

              {/* CARD */}
              <div className="timeline-card">

                <div className="timeline-date">
                  {event.date}
                </div>

                <h2>
                  {event.title}
                </h2>

                <p>
                  {event.text}
                </p>

              </div>

            </motion.div>
          ))}

        </div>

        {/* END */}
        <motion.div
          className="timeline-ending"
          initial={{
            opacity: 0,
            scale: 0.9,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          viewport={{
            once: true,
          }}
        >

          <Heart
            size={24}
            fill="currentColor"
          />

          <p>
            And this is only
            <br />
            one chapter of our story.
          </p>

          <span>
            More memories to come ♡
          </span>

        </motion.div>

        <div className="timeline-bottom-space"></div>

      </div>

      <div className="home-indicator"></div>

    </motion.div>
  );
}

/* =====================================================
   MAIN APP
===================================================== */

function App() {
  const [unlocked, setUnlocked] =
    useState(false);

  const [currentApp, setCurrentApp] =
    useState(null);

  const [exploredApps, setExploredApps] =
    useState(new Set());

  const [secretUnlocked, setSecretUnlocked] =
    useState(false);

  const [showNotification, setShowNotification] =
    useState(false);

  const openApp = (appId) => {
    if (appId === "special") {
      setCurrentApp("special");
      return;
    }

    setExploredApps((previous) => {
      if (previous.has(appId)) {
        return previous;
      }

      const next =
        new Set(previous);

      next.add(appId);

      return next;
    });

    setCurrentApp(appId);
  };

  useEffect(() => {
    if (
      exploredApps.size === 5 &&
      !secretUnlocked
    ) {
      const timer =
        setTimeout(() => {
          setSecretUnlocked(true);

          setShowNotification(true);

          setTimeout(() => {
            setShowNotification(false);
          }, 5000);
        }, 700);

      return () =>
        clearTimeout(timer);
    }
  }, [
    exploredApps,
    secretUnlocked,
  ]);

  return (
  <main className="app">

    <div className="phone">

      <AnimatePresence mode="wait">

        {!unlocked ? (

          <LockScreen
            key="lock"
            onUnlock={() =>
              setUnlocked(true)
            }
          />

        ) : currentApp === "gallery" ? (

          <Gallery
            key="gallery"
            onBack={() =>
              setCurrentApp(null)
            }
          />

        ) : currentApp === "messages" ? (

          <MessagesApp
            key="messages"
            onBack={() =>
              setCurrentApp(null)
            }
          />

        ) : currentApp === "music" ? (

          <MusicApp
            key="music"
            onBack={() =>
              setCurrentApp(null)
            }
          />

        ) : currentApp === "timeline" ? (

  <TimelineApp
    key="timeline"
    onBack={() =>
      setCurrentApp(null)
    }
  />

) : currentApp === "memories" ? (

  <MemoriesApp
    key="memories"
    onBack={() =>
      setCurrentApp(null)
    }
  />

) : currentApp ? (

          currentApp === "special" ? (

            <SpecialApp
              key="special"
              onBack={() =>
                setCurrentApp(null)
              }
            />

          ) : (

            <AppPlaceholder
              key={currentApp}
              appId={currentApp}
              onBack={() =>
                setCurrentApp(null)
              }
            />

          )

        ) : (

          <HomeScreen
            key="home"
            exploredApps={
              exploredApps
            }
            secretUnlocked={
              secretUnlocked
            }
            onOpenApp={
              openApp
            }
          />

        )}

      </AnimatePresence>

      <AnimatePresence>

        {showNotification && (

          <motion.div
            className="unlock-notification"

            initial={{
              opacity: 0,
              y: -100,
            }}

            animate={{
              opacity: 1,
              y: 0,
            }}

            exit={{
              opacity: 0,
              y: -100,
            }}
          >

            <div className="unlock-notification-icon">

              <Gift size={21} />

            </div>

            <div>

              <strong>
                New App Unlocked
              </strong>

              <p>
                Something special is
                waiting for you...
              </p>

            </div>

            <button
              onClick={() =>
                setShowNotification(false)
              }
            >
              <X size={17} />
            </button>

          </motion.div>

        )}

      </AnimatePresence>

    </div>

  </main>
);
}

export default App;