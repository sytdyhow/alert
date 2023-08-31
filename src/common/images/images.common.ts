export class ImageCommon {
    static editFileName = (req, file, callback) => {
      const name = file.originalname.split('.')[0];
      const fileExtName = '.' + file.originalname.split('.')[1];
      const randomName = Array(4)
        .fill(null)
        .map(() => Math.round(Math.random() * 16).toString(16))
        .join('');
      callback(null, `${name}-${randomName}${fileExtName}`);
    };



    static imageFileFilter = (req, file, callback) => {
      if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
        return callback(new Error('Only image files are allowed!'), false);
      }
      callback(null, true);
    };
  }

  
