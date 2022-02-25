function isBookmarked(bookmarkedItems, item) {
  return bookmarkedItems.some((i) => i.id === item.id);
}

function removeBookmark(bookmarkedItems, item) {
  return bookmarkedItems.filter((i) => i.id !== item.id);
}

export { isBookmarked, removeBookmark };
