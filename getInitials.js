function getInitials(name) {
  return name.split(' ')
    .map(word => word.chatAt(0))
    .join('');
}
