# Rise11 Assignment
This is the assignment to be submitted for Rise11 Hiring process. This project was built using Nextjs and Typescript. Zod was used for some validations, relating to claim and contract value calculations, apart from that there are no imports or external libraries used whatsoever. 

## Approach
The prompt seemed to be only for building the frontend. Here's a step-by-step condensation of what i did:
- First i saw three main sections, Sidebar, Topnav and the main dashboard with content. My first objective was to design the frontend without any input or calculations first.
- I started with the Sidebar, created a const array with all the options and the icon paths and mapped them onto the Sidebar. Added transition effects using Tailwind for more sleek UI feel.
- Then the topnav, added buttons and proper padding.
- And finally the dashboard. I divided it into 2 sections, The heading, the Interactives (the ones awaiting input).
- I divided the dashboard into 3 main divs, to mimic the grey line passing through.
- The claim and contract value, has an input validator that creates a schema using Zod, it being ```z.number().positive().min(0)```. Makes sure the input is a number and is greater than 0.
- Then when the input value is passed through this Schema and it doesn't fulfil some condition, the error is displayed down along the input.
- I kept the location to be of Text input, as with Google Map's API it would be easier to integrate with its search feature, and i used a similar approach for the languages section as well.
