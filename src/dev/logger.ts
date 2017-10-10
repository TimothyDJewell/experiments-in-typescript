const Log = function(event: string) : void {
  const maxLength = 100;
  let date = new Date();
  let description = date.toLocaleTimeString() + ' - ' + event;
  let listItem = document.createElement('li');
  listItem.appendChild(document.createTextNode(description));
  let log = document.getElementById('devLog');
  if (log.firstChild) {
    log.insertBefore(listItem, log.firstChild);
  } else {
    log.appendChild(listItem);
  }
  let itemToRemove = log.getElementsByTagName('li').item(maxLength);
  if (itemToRemove) {
    itemToRemove.parentNode.removeChild(itemToRemove);
  }
}

export default Log;
