# amp-gh-gist-proxy
Embed github gists in amp-iframes

## What
[amp](https://www.ampproject.org/) does not permit to embed external script files.

Therefore it's not easily possible to embed [github gists](https://gist.github.com/).
amp allows you to embed iframes, though. Due to the nature of iframes however, amp is not able to figure out the size of an iframe automatically.

This is where the proxy comes into play. It'll embed the gist content and tell amp about the height.

## Installation
Clone this repo. There is no npm package (yet).

## Usage
There is no hosted service yet, in order to use it you'd need to host it yourself.

### Starting the service 
```cli
$ npm start -- 8080 # 8080 is the port the server will listen to
```

### Using the proxy

```cli
curl https://yourproxydomain.com/?url=https://gist.github.com/robin-drexler/d4d167f1aa0bd94094e2
```

### amp iframe example

```html
<amp-iframe width="627" height="332"
   resizable
   sandbox
   src="https://yourproxydomain.com/?url={{}}">
 <div overflow></div>
</amp-iframe>
```

### Real world example

See it in use here: [https://www.robin-drexler.com/2015/07/07/overriding-default-browser-shortcuts/](https://www.robin-drexler.com/2015/07/07/overriding-default-browser-shortcuts/)
