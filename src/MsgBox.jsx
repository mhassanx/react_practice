function MsgBox({ userName, textColor }) {
    let styles = { color: textColor }
    return <div>

        <p style={styles}> Hello {userName}</p>



    </div>
}

export default MsgBox;