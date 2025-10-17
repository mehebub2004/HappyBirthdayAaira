
        // Add some interactive sparkle effects
        function createSparkle() {
            const sparkle = document.createElement('div');
            sparkle.style.position = 'absolute';
            sparkle.style.width = '4px';
            sparkle.style.height = '4px';
            sparkle.style.background = '#fff';
            sparkle.style.borderRadius = '50%';
            sparkle.style.pointerEvents = 'none';
            sparkle.style.zIndex = '100';
            sparkle.style.left = Math.random() * window.innerWidth + 'px';
            sparkle.style.top = Math.random() * window.innerHeight + 'px';
            sparkle.style.animation = 'sparkleAnim 2s ease-out forwards';
            
            document.body.appendChild(sparkle);
            
            setTimeout(() => {
                sparkle.remove();
            }, 2000);
        }
        
        // Create sparkles periodically
        setInterval(createSparkle, 300);
        
        // Click interaction
        document.addEventListener('click', function(e) {
            for(let i = 0; i < 5; i++) {
                setTimeout(createSparkle, i * 100);
            }
        });
