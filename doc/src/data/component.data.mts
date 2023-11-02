import fs from 'node:fs';
export default {
  watch: ['../../../packages/**/*.vue'],
  load(watchedFiles) {
    return watchedFiles.map((file) => {
      console.log(file);
      return { [file.name]: fs.readFileSync(file, 'utf-8') };
    });
  },
};
