declare const Utils: {
    /**
     * 将字符串或字符串数组转换为驼峰命名格式
     * @param input
     * @returns
     */
    cameCase(input: string | string[]): string;
    /**
     * 深拷贝
     * @param value
     * @returns
     */
    cloneDeep(value: any): any;
    /**
     * 手机号脱敏
     * @param text
     * @returns
     */
    maskPhoneNumber(text: string | undefined | null): string;
};

export { Utils, Utils as default };
