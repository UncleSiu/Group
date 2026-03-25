    // Simple function to handle page jumping via JS
    function goToPage(pageName) {
        window.location.href = pageName + ".html";
    }

    // Example of making the menu active
    document.addEventListener('DOMContentLoaded', () => {
        console.log("Website Loaded Successfully");
        // You can add logic here to highlight the current page in the navbar


    document.getElementById("date").innerHTML = new Date().getFullYear()
    });

    const opening = document.getElementById('sh1');
    if (opening) {
            opening.innerText = "EXPLORE THE WORLD";
            opening.style.color = "coral";
            opening.style.fontSize = '10vw';
            opening.style.textAlign = 'center';
            opening.style.marginTop = '-20px';  

            let timer = setInterval(function() {
                if (opening.style.visibility === 'hidden') {
                    opening.style.visibility = 'visible';
                } else {
                    opening.style.visibility = 'hidden';
                }
            }, 500); 

            opening.addEventListener('mousedown', function() {
                if (timer) {
                    clearInterval(timer);
                    timer = null;
                    opening.style.visibility = 'visible';
                } else {
                    timer = setInterval(function() {
                        if (opening.style.visibility === 'hidden') {
                            opening.style.visibility = 'visible';
                        } else {
                            opening.style.visibility = 'hidden';
                        }
                    }, 500);
                }
            });
        }

       window.addEventListener('scroll', function() {
    // 這裡的 'banner' 必須對應 HTML 的 id="banner"
    const bannerImage = document.getElementById('banner');
    
    let scrollPosition = window.scrollY;
    
    // 計算模糊程度：捲動距離除以 50 (數字愈小模糊愈快)
    let blurValue = scrollPosition / 70; 
    
    // 套用濾鏡
    bannerImage.style.filter = `blur(${blurValue}px)`;
});

function openModal(src) {
  document.getElementById("imgPopup").src = src;
  document.getElementById("myModal").style.display = "flex";
}

function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

// 自動複製圖片以達成無縫滾動
const gallery = document.querySelector('.gallery');
gallery.innerHTML += gallery.innerHTML; 

