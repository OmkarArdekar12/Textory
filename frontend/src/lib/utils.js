export function formatMessageTime(date) {
  return new Date(date).toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
}

export function getToken() {
  const token = localStorage.getItem("token");
  if (!token) {
    return null;
  }
  return token;
}
