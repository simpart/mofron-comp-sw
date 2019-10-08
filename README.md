# mofron-comp-sw
[mofron](https://mofron.github.io/mofron/) is module based frontend framework.

switching display components by 'switching' function.

switching the display to a specified index number of the child component.

switch in ascending order if it has no parameter.


# Install
```
npm install mofron mofron-comp-sw
```

# Sample
```html
<require>
    <tag module="mofron-comp-switch">Switch</tag>
    <tag module="mofron-comp-button">Button</tag>
    <tag module="mofron-event-click">Click</tag>
</require>

<script name=clk run=init>
sw.switching();
</script>

<Switch name=sw event=Click(clk)>
    <Button width=1rem>On</Button>
    <Button width=1rem>OFF</Button>
</Switch>
```
# Parameter

|Simple<br>Param | Parameter Name | Type | Description |
|:--------------:|:---------------|:-----|:------------|
| | switchEvent | function | switch event function |
| | | mixed | event parameter |

