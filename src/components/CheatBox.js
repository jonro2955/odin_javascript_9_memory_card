
const CheatBox = (props) => {
  function cheatActivator() {
    if (document.getElementById('cheatText').style.display === 'initial') {
      document.getElementById('cheatText').style.display = 'none';
    } else {
      document.getElementById('cheatText').style.display = 'initial';
    }
  }

  return (
    <div id='CheatBox'>
      <button onClick={cheatActivator}>Toggle Cheat</button>
      <div id='cheatText'>Clicked Items: {props.cheatData}</div>
    </div>
  );
};
export default CheatBox;
