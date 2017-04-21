class AttributeCard extends React.Component{
  constructor(props) {
    super(props)
  }

  render () {
    return (
      <table className="AttributeCard">
        <thead>
          <TableHeader columns={ ['Attribute', 'Score', 'Bonus'] }/>
        </thead>
        <tbody>
          {buildStatRows(this.props)}
        </tbody>
      </table>
    )
  }
}

var buildStatRows = (props) => {
  return _.map(props.stats, (statObject, statSlug) => {
    return <AttributeRow key={ statSlug } stat={ statObject }/>
  })
}

window.AttributeCard = AttributeCard;
