class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state = {
            message: '',
            label: 'Show details'
        }
    }
    handleToggleVisibility() {
        this.setState((prevState) => {
            return {
                message: !prevState.message && "This is my message",
                label: !prevState.message ? 'Hide details' : 'Show details'
            }
        })
    }
    render() {
        return (
            <div>
                <h1>Visibility</h1>
                <button onClick={this.handleToggleVisibility}>{this.state.label}</button>
                <p>{this.state.message}</p>
            </div>
        );
    }

}
ReactDOM.render(<Toggle />, document.getElementById('app'));
/*
let visibility = false;

const toggle = () => {
    visibility = !visibility;
    render();
}

const render = () => {
    const jsx = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={toggle}>
                {visibility ? 'Hide details' : 'Show details'}
            </button>
            <p>{
                visibility && "This is my message"
            }</p>
        </div>
    );
    ReactDOM.render(jsx, document.getElementById('app'));
};

render();


////////
const app = {
    title: 'Visibility Toggle',
    toggledMessage: ''
};

const onToggleMessage = () => {
    app.toggledMessage.length > 0 ? app.toggledMessage = '' : app.toggledMessage = 'Message Here';
    render();
}

const render = () => {
    const templateToggle = (
        <div>
            <h1>{app.title}</h1>
            <button onClick={onToggleMessage}>Show Details</button>
            <p>{app.toggledMessage}</p>
        </div>
    )
    ReactDOM.render(templateToggle, appRoot);
};

const appRoot = document.getElementById('app');
render();
*/