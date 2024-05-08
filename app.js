document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".card");
  const follower = document.getElementById("follower");

  function updateFollowerPosition(event) {
    const followerSize = 50;
    const mouseX = event.clientX;
    const mouseY = event.clientY;
    const followerX = mouseX - followerSize / 2;
    const followerY = mouseY - followerSize / 2;
    follower.style.left = followerX + "px";
    follower.style.top = followerY + "px";
  }

  cards.forEach((card) => {
    const cardEnter = (event) => {
      updateFollowerPosition(event);
      follower.className = "enter";
      document.addEventListener("mousemove", updateFollowerPosition);
    };
    const cardLeave = () => {
      follower.className = "leave";
      document.removeEventListener("mousemove", updateFollowerPosition);
    };
    card.addEventListener("mouseenter", cardEnter);
    card.addEventListener("mouseleave", cardLeave);
  });
});
