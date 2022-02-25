import orderByProps from '../orderByProps';

const play = {
    name: 'мечник',
    health: 10,
    level: 2,
    attack: 80,
    defence: 40,
};

test('Проверка на порядок по заданным свойствам', () => {
    const result = orderByProps(play, ['name', 'level']);
    const expected = [
      { key: 'name', value: 'мечник' },
      { key: 'level', value: 2 },
      { key: 'attack', value: 80 },
      { key: 'defence', value: 40 },
      { key: 'health', value: 10 },
    ];
  
    expect(result).toEqual(expected);
  });
  
  test('Проверка на порядок без заданных свойств', () => {
    const result = orderByProps(play, []);
    const expected = [
      { key: 'attack', value: 80 },
      { key: 'defence', value: 40 },
      { key: 'health', value: 10 },
      { key: 'level', value: 2 },
      { key: 'name', value: 'мечник' },
    ];
  
    expect(result).toEqual(expected);
  });