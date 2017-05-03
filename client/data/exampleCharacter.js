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
      orderPriority: 1,
      max: 34,
      slug: 'hp',
      levels : [10, 4, 4, 4],
      editFields: {
        number: true
      }
    },
    ac: {
      readable_value: 'AC',
      slug: 'ac',
      value: 17,
      orderPriority: 2
    },
    speed: {
      readable_value: 'Speed',
      slug: 'speed',
      value: 30,
      orderPriority: 3
    },
    init: {
      readable_value: 'Initiative',
      slug: 'init',
      value: 4,
      orderPriority: 4
    },
    carry: {
      readable_value: 'Carrying Capacity',
      slug: 'carry',
      value: 210,
      orderPriority: 5
    },
    sp: {
      readable_value: 'Sorcery Points',
      slug: 'sp',
      value: 3,
      max: 3,
      orderPriority: 6,
      editFields: {
        number: true
      }
    },
    hd: {
      readable_value: 'Hit Die',
      slug: 'hd',
      value: 4,
      max: 4,
      orderPriority: 7,
      editFields: {
        number: true
      }
    }
  },
  inventory: {
    columns: {
      values: [
        {slug: 'readable_value', readable_value: 'Name'},
        {slug: 'quantity', readable_value: 'Quantity', editable: true, type: 'number'},
        {slug: 'description', readable_value: 'Description'},
        {slug: 'weight', readable_value: 'Weight', editable: true}
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