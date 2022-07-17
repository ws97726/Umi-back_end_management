// 示例方法，没有实际意义
export function trim(str: string) {
  return str.trim();
}

export function deepClone(target) {
  let result;
  if (typeof target === 'object') {
    console.log(Array.isArray(target))
    if (Array.isArray(target)) {
      result = [];
      target.forEach(item => {
        result.push(deepClone(item));
      })
    } else {
      result = {};
      for (const key in target) {
        result[key] = deepClone(target[key]);
      }
    }
  } else {
    result = target;
  }

  return result;
}

export function filterItem(id, list) {
  let flag = true;
  list.forEach(item => {
    if (item.id === id) {
      flag === false;
    }
  })
  return flag;
}


export function SetSerialNumber(index, current, pagesize) {
  return (current - 1) * pagesize + (index + 1)
}

