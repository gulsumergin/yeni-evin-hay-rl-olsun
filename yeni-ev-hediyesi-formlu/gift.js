function goToGiftCard(giftName) {
  localStorage.setItem("selectedGift", giftName);
  window.location.href = "hediye-karti.html";
}
