// This is an example response from the YouTube Search API
// when searching with the query "react tutorial"
window.exampleCharacter = {
  attributes: {
    str: {
      readable_value: 'Strength',
      value: 14
    },
    con: {
      readable_value: 'Constitution',
      value: 16
    },
    dex: {
      readable_value: 'Dexterity',
      value: 18
    },
    int: {
      readable_value: 'Intellegence',
      value: 14
    },
    wis: {
      readable_value: 'Wisdom',
      value: 9
    },
    cha: {
      readable_value: 'Charisma',
      value: 17
    }
  },
  combat_table: {
    columns: {
      values: [
        {slug: 'readable_value'},
        {slug: 'value'},
        ],
      skipRow: true
    },
    hp: {
      readable_value: 'HP',
      value: 34,
      orderPriority: 1
    },
    ac: {
      readable_value: 'AC',
      value: 17,
      orderPriority: 2
    },
    speed: {
      readable_value: 'Speed',
      value: 30,
      orderPriority: 3
    },
    init: {
      readable_value: 'Initiative',
      value: 4,
      orderPriority: 4
    },
    carry: {
      readable_value: 'Carrying Capacity',
      value: 210,
      orderPriority: 5
    },
    sp: {
      readable_value: 'Sorcery Points',
      value: 3,
      max: 3,
      orderPriority: 6
    }
  },
  inventory: {
    columns: {
      values: [
        {slug: 'readable_value', readable_value: 'Name'},
        {slug: 'quantity', readable_value: 'Quantity', editable: true, type: 'number'},
        {slug: 'description', readable_value: 'Description'},
        // {slug: 'value', editable: true}
        ],
      skipRow: true,
      title: 'Inventory'
    },
    rapier: {
      readable_value: 'Rapier',
      quantity: 1
    },
    shield: {
      readable_value: 'Shield',
      quantity: 1
    }
  }
}