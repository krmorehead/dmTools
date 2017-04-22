class SkillBar extends React.Component{
  constructor(props) {
    super(props)
    this.skills = getSkills()
    this.columns = ['Skill Name', 'Attr.', 'Bonus'];
  }

  render () {
    return (      
      <table className="GeneralTable inline">
        <thead>
          <tr>
            <th colSpan={ this.columns.length }>Skills</th>
          </tr>
          <TableHeader columns={ this.columns }/>
        </thead>
        <tbody>
          { buildSkillRows(this.skills) }
        </tbody>
      </table>
    )
  }
}

var buildSkillRows = (skills) => {
  return _.map(skills, (skill) => {
    return <GeneralRow values={ [skill.name, skill.attr, 1] } key={ skill.name }/>
  });
}

var getSkills = () => {
  return window.skills;
}

var calculateBonus = (statValue) => {
  return Math.floor((statValue - 10) / 2)
}

window.SkillBar = SkillBar;
