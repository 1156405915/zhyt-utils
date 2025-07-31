const Utils = {
  /**
   * 将字符串或字符串数组转换为驼峰命名格式
   * @param input 
   * @returns 
   */
  cameCase(input: string | string[]): string {
    if (!input) return '';

  // 处理数组输入
  if (Array.isArray(input)) {
    input = input.join(' ');
  }

  // 将字符串转换为小写，并用空格替换所有非字母数字字符
  const words = input
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, ' ')
    .trim()
    .split(' ');

  // 如果只有一个单词，直接返回
  if (words.length === 1) return words[0];

  // 将第一个单词保持小写，其他单词首字母大写
  return words
    .map((word, index) => {
      if (index === 0) return word;
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join('');
  },
  /**
   * 深拷贝
   * @param value 
   * @returns 
   */
  cloneDeep(value: any): any {
    if (!value) {
      return value;
    }
    // 数组
    if (Array.isArray(value)) {
      return value.map((item) => this.cloneDeep(item)) as any;
    }
    // 日期
    if (value instanceof Date) {
      return new Date(value) as any;
    }
    // 普通对象
    if (typeof value === 'object') {
      return Object.fromEntries(
        Object.entries(value).map(([k, v]: [string, any]) => {
          return [k, this.cloneDeep(v)];
        })
      ) as any;
    }
    // 基本类型
    return value;
  },

  /**
   * 手机号脱敏
   * @param text 
   * @returns 
   */
  maskPhoneNumber(text: string | undefined | null): string {
    if (!text) {
      return '';
    }
    const regex: RegExp = /(\d{3})\d{4}(\d{4})/g;
    text = text.replace(regex, '$1****$2');
    return text;
  }
}

export { Utils }
export default Utils