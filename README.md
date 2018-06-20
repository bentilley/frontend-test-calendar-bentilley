# Front-End Coding Challenge - BEN TILLEY

My submission for the Ingresso frontend coding challenge

## Features

# a way to choose the number of tickets

I have implement this feature almost identically to how it appears on the
fromtheboxoffice site - with choice buttons and a modal popup on the last
button for higher ticket number selections. The main component NumTickets
has a settings property where you can change how many choices to display as
buttons and how many to add to the modal.

# a way to visualise the months

I have added some styling to the calendar that was already there to make it
slightly sharper and to hide the cells that did not correspond to actual
dates.

# a way to visualise more than 2 performances on a day

The calendar can handle multiple performances per day, they appear as they
do on the fromtheboxoffice site, as separate boxes in the given day of the
calendar. These can be selected, which...

# opens a seating plan on the right side of the screen

This renders the data from the seating plan API on to a canvas. I have left
in the code (commented out) the beginnings of my piping the selected
performance data through to the Seating component to also render the available
seats, but I was running out of time at this point. (Also, I realised that
perhaps the data from the performance API was not appropriate for updating
the seating map, or it was going to take some hefty parsing!). As the seating
plan data is independent of the performance selected the seating plan
is  a little bit less than interactive at the moment :)

# the heading reflects the current selected performance

The heading changes based on the current performance that is selected.

## Test

I have written tests for the rendering of every component and for any
methods on each e.g. calendar string formatting and canvas rendering.

I did not have time to implement mock api calls to test the update functions.

## Responsivity

The UI is high level responsive i.e. the components re-organise themselves to
fit a smaller viewport. There is also some light css on the calendar to
keep it neat at smaller sizes.
