  const dinoElem = document.querySelector("[data-dino]")
  const JUMP_SPEED = 0.45
  const GRAVITY = 0.0015
  const DINO_FRAME_COUNT = 2
  const FRAME_TIME = 100
  
  let isJumping
  let dinoFrame
  let currentFrameTime

function setupDino() {
    isJumping = false
    dinoFrame = 0
    currentFrameTime = 0
    setCustomProperty(dinoElem, "--bottom", 0)
    document.removeEventListener("keydown", onJump)
    document.addEventListener("keydown", onJump)
  }
  
function updateDino(delta, speedScale) {
    handleRun(delta, speedScale)
    handleJump(delta)
  }
  
function getDinoRect() {
    return dinoElem.getBoundingClientRect()
  }
  
    if (e.code !== "Space" || isJumping) return

    isJumping = true
  }
  
