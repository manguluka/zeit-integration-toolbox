# Zeit Integration Toolbox

> Tools to facilitate rapid development of [Zeit Integrations](https://zeit.co/docs/integrations)

![screenrecording](http://cdn-9w4u9y9br.now.sh/zeit-integration-toolbox.gif "Screenrecording")

Originally created for participants in the inaugural [Zeit Integrations Hackathon](https://zeit.co/hackathon). 

Contributions(tests/documentation/..) welcome and appreciated. Feel free to contact `@Luka Kakia` on the hackathon Slack with any questions.

The integration used in screenshot can be found at [https://github.com/manguluka/zeit-integration-starter-offline](https://github.com/manguluka/zeit-integration-starter-offline)

**Related Links**
- [https://github.com/manguluka/zeit-api-client](https://github.com/manguluka/zeit-api-client) JavaScript wrapper for the Zeit API
- [https://github.com/manguluka/zeit-integration-starter-offline](https://github.com/manguluka/zeit-integration-starter-offline) Offline-first project starter and component showcase for Zeit Integrations
- [https://github.com/zeit/awesome-zeit-integrations](https://github.com/zeit/awesome-zeit-integrations) This list aggregates the best resources for ZEIT Integrations.

## Development

``` bash
# install dependencies
yarn install

# serve with hot reload at localhost:8080
yarn run dev

# build for production with minification
yarn run build

# test the production build locally
yarn run serve
```

---

### Adding support for new integration components
Catalog components are converted to compliant HTML with the [preact-markup](https://github.com/developit/preact-cli/blob/master/README.md) package.

All component definitions can be found in `src/components/zeit-catalog/index.js`, with their style definitions alongside(src/components/zeit-catalog/style.js)


#### Example component definiton for `<Link/>`
```javascript
export const Link = ({ children, ...props }) => (
	<a class="cmp cmp-link" {...props}>
		{children}
	</a>
);
```

#### Example component style definition for `<Link/>`
```css
.cmp-link {
    color: rgb(6, 125, 247);
    text-decoration: none;
}
```

---
Built with the [Preact CLI](https://github.com/developit/preact-cli/blob/master/README.md)

For detailed explanation on how things work, checkout the [Preact CLI Readme](https://github.com/developit/preact-cli/blob/master/README.md).

## License

MIT © [Luka Kakia](https://github.com/manguluka)
