import Log from './logger';

function LoadScript(url: string, id: string) : void {
  let newScriptTag = document.createElement('script');
  newScriptTag.id = id;
  newScriptTag.src = url;
  document.body.appendChild(newScriptTag);
}

function LoadCss(url: string, id: string): void {
  let newLinkTag = document.createElement('link');
  newLinkTag.id = id;
  newLinkTag.rel = 'stylesheet';
  newLinkTag.type = 'text/css';
  newLinkTag.href = url;
  document.head.appendChild(newLinkTag);
}

function RemoveElement(el:HTMLElement): void {
  if (el) {
    el.parentNode.removeChild(el);
  }
}

function MigrateElementId(currentId:string, newId:string):void {
  let el = document.getElementById(currentId);
  if (el) {
    el.id = newId;
  }
}

const SetupReload = function() {
  setTimeout(() => {
    Log('Reloading');
    LoadScript('../build/dist/index.js', 'newJs');
    // Maintain at most two items so that the dom doesn't blow up with hundreds
    // of elements
    RemoveElement(document.getElementById('oldJs'));
    MigrateElementId('currJs', 'oldJs');
    MigrateElementId('newJs', 'currJs');
    LoadCss('style.css', 'newCss');
    RemoveElement(document.getElementById('oldCss'));
    MigrateElementId('currCss', 'oldCss');
    MigrateElementId('newCss', 'currCss');
  }, 5000);
};

export default SetupReload;
