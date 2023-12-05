# Style guide for Klaw documentation

We adhere to the [Google developer documentation style guide](https://developers.google.com/style). We're also establishing a more detailed custom guidelines, which is documented here.

You can run a Vale check for all available styles by running `pnpm spell:all`. At the moment, only the level `error` is an established style guide for us. Checking for warnings or suggestions is meant to be used as inspiration and support.

Where possible, these rules are checked automatically using Vale. For more information on how this is set up, see
our [Vale documentation](.github/vale/vale.md).

We're committed to producing accessible documentation. Learn more in Google's guide on [writing accessible documentation](https://developers.google.com/style/accessibility).

## Klaw's style guide

### Capitalization

Capitalization is essential when words are:

- used as proper nouns
- referencing to specific UI elements
- at the start of a heading.

#### Examples different capitalization

"Topic"
While "topic" would typically be in lowercase, if it's referring to a UI element or a proper noun, it should be capitalized. As an example: "To create a new topic, navigate to the Klaw console and select 'Topic' from the left sidebar."

"Load Balancer"

- Referring to a specific UI section or a branded product name, it would be "Navigate to the 'Load Balancer' settings to adjust configurations."
- If it is used in the sentence "In this section, let's explore how to achieve high availability for Klaw using Nginx as the load balancer", "load balancer" is used as a generic term and not as a proper noun or a specific UI element reference.

"User"

- In a context like "The 'User' field indicates..." it refers to a specific UI section and is capitalized.
- In the sentence "Klaw stores owner information", "user" should be in lowercase as it's used in a general context.

#### Summary capitalization

- **Contextual capitalization**: Adjust the capitalization based on the specific usage in the content.
- **Product names**: Always capitalize specific product names like Docker, Klaw, and Apache Kafka®.
- **Acronyms**: Use all uppercase for acronyms, such as ACL and API.
- **UI elements**: If referencing specific user interface elements, capitalize them as they appear in the UI.
- **Generic terms**: Words like "user" or "server" should typically be in lowercase unless they start a sentence or are part of a title.
- **Branding consistency**: Ensure that brand-specific terms are consistently capitalized across all documentation. This should be added to our [branding](.github/vale/styles/Klaw/branding.yml) style.
- **Review third-party names**: Always respect the capitalization of third-party product or company names, even if they don't follow standard rules. These can be added to our [branding](.github/vale/styles/Klaw/branding.yml) style.
- **Use sentence case**: For titles, headings, and general content, adopt sentence case,
  capitalizing only the first word and any proper nouns.
  For this, we have [capitalization heading](.github/vale/styles/Klaw/capitalization-heading.yml) style.
  This style configuration still needs work, as we need to have a comprehensive list of expectations.
  Until then, it can be used as support with running `pnpm spell:warn`.

### Helpful tools

Until we have established more rules and tooling for our writing, we can recommend these tools:

- [AlexJS](https://alexjs.com/#content) catch and remove condescending, inconsiderate or insensitive language
- [Hemingway Editor](https://hemingwayapp.com/) - to identify errors that affect the readability of your text
