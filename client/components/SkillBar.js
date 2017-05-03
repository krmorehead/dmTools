class SkillBar extends React.Component{
  constructor(props) {
    super(props)
    this.state = {};
    this.state.skills = getSkills()
    this.columns = [{value: 'Skill Name', slug: 'name', sort: 'as'}, {value: 'Attr.', slug: 'attr'}, {value: 'Bonus', slug: 'bonus'}];
    this.sortProperty = 'name';
    this.asc = true;

    this.sortBy = (slug) => {
      var sortedSkills;
      var stats = this.props.stats;
      if (this.sortProperty === slug) {
        this.asc = !this.asc;
      }
      var orderBy = this.asc ? 'asc' : 'desc';

      this.sortProperty = slug;
      if (slug === 'bonus') {
        sortedSkills = _.orderBy(this.state.skills, function (skill1) {
          return -calculateBonus(stats[skill1.attr].value);
        }, orderBy)
      } else {
        sortedSkills = _.orderBy(this.state.skills, slug, orderBy);

      }
      this.setState({skills: sortedSkills});
    }

  }

  render () {
    return (      
      <table className="GeneralTable inline">
        <thead>
          <tr>
            <th colSpan={ this.columns.length }>Skills</th>
          </tr>
          <TableHeader sortBy={ this.sortBy } columns={ this.columns }/>
        </thead>
        <tbody>
          { buildSkillRows(this.state.skills, this.props.stats) }
        </tbody>
      </table>
    )
  }
}

var buildSkillRows = (skills, stats) => {
  return _.map(skills, (skill) => {
    return <GeneralRow values={ [skill.name, skill.attr, calculateBonus(stats[skill.attr].value)] } key={ skill.name }/>
  });
}

var getSkills = () => {
  return window.skills;
}

var calculateBonus = (statValue) => {
  return Math.floor((statValue - 10) / 2)
}

window.SkillBar = SkillBar;
