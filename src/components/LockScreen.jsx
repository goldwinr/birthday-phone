import { motion } from "framer-motion";
import { Lock, ChevronUp, Heart } from "lucide-react";

function LockScreen({ onUnlock }) {
  return (
    <motion.div
      className="lock-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Decorative background */}
      <div className="glow glow-one" />
      <div className="glow glow-two" />

      {/* Status bar */}
      <div className="status-bar">
        <span>12:08</span>

        <div className="status-icons">
          <span>▮▮▮</span>
          <span>⌁</span>
          <span>100%</span>
        </div>
      </div>

      {/* Lock */}
      <div className="lock-content">
        <motion.div
          className="lock-icon"
          initial={{ scale: 0, rotate: -20 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{
            delay: 0.4,
            type: "spring",
            stiffness: 180,
          }}
        >
          <Lock size={22} />
        </motion.div>

        <motion.p
          className="small-title"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          Happy Birthday
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          Sangeetha
        </motion.h1>

        <motion.p
          className="birthday-date"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          24 · 09 · 1998
        </motion.p>

        <motion.div
          className="heart-divider"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2 }}
        >
          <span />
          <Heart size={16} fill="currentColor" />
          <span />
        </motion.div>

        {/* Notification */}
        <motion.div
          className="birthday-notification"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
        >
          <div className="notification-heart">
            ❤️
          </div>

          <div className="notification-text">
            <div className="notification-header">
              <strong>Birthday Surprise</strong>
              <span>now</span>
            </div>

            <p>
              Someone made something special
              <br />
              for you...
            </p>
          </div>
        </motion.div>
      </div>

      {/* Unlock button */}
      <motion.button
        className="unlock-button"
        onClick={onUnlock}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        whileTap={{ scale: 0.94 }}
      >
        <motion.div
          animate={{ y: [-3, 3, -3] }}
          transition={{
            duration: 1.4,
            repeat: Infinity,
          }}
        >
          <ChevronUp size={27} />
        </motion.div>

        <span>Tap to unlock</span>
      </motion.button>
    </motion.div>
  );
}

export default LockScreen;