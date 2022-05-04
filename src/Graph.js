class ForceLayout extends React.Component {
    render() {
        const { width, height } = this.props;
        const style = {
            width,
            height
        }

        return <div style={style} ref="mountPoint"></div>
    }
}

ReactDOM.render (
    <ForceLayout width={400} height={330} />
    document
)