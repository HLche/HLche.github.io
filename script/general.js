export const scrollAnimation = (animationList)=>{
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.intersectionRatio > 0) {
                const anim = animationList[entry.target.id].anim;
                if (anim !== undefined) {
                    entry.target.style.animation = anim;
                    observer.unobserve(entry.target);
                } else {
                    console.log(
                        "Error - id not exist in animationList"
                    );
                }
            }
        });
    });
    Object.keys(animationList).map((animObject, index) => {
        observer.observe(animationList[animObject].targetElement);
    });
}
