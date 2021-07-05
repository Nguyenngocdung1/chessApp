import { connect } from "react-redux";

const mapStateToProps = (state) => ({
    aiGames: state.aiGame.aiGames
})

const mapDispatchToProps = (dispatch) => ({
    addGame: (item) => {dispatch(addGame(item))}
})