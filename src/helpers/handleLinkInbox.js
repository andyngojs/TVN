export function handleFbToMessengerLink(linkFb) {
  if (!linkFb.match(/(fb.com|facebook.com|www)/g)) {
    return null;
  }

  return linkFb.replace(/fb.com/g, "messenger.com/t");
}
