class SkillBar extends React.Component{
  constructor(props) {
    super(props)
  }

  render () {
    return (<div className='SkillBar inLine'>
      Hi again
      </div>
    )
  }
}

var buildStatRows = (props) => {
  return _.map(props.stats, (statObject, statSlug) => {
    return <AttributeRow key={ statSlug } stat={ statObject }/>
  })
}

window.SkillBar = SkillBar;
