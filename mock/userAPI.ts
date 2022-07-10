const users = [
  { name: 'Umi', nickName: 'U', gender: 'MALE' },
  { name: 'Fish', nickName: 'B', gender: 'FEMALE' },
  { name: 'MINI', nickName: 'A', gender: 'FEMALF' },
  { name: 'JACK', nickName: 'C', gender: 'FEMALH' },
  { name: 'JASON', nickName: 'E', gender: 'FEMALJ' },
  { name: 'FishA', nickName: 'D', gender: 'FEMALK' },
  { name: 'FishC', nickName: 'G', gender: 'FEMALL' },
  { name: 'FishB', nickName: 'Y', gender: 'FEMALM' },
  { name: 'FishD', nickName: 'X', gender: 'FEMALN' },
];

export default {
  'GET /api/v1/queryUserList': (req: any, res: any) => {
    res.json({
      success: true,
      data: { list: users },
      errorCode: 0,
    });
  },
  'PUT /api/v1/user/': (req: any, res: any) => {
    res.json({
      success: true,
      errorCode: 0,
    });
  },
};
