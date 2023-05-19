// password pattern
export const PASSWORD_PATTERN = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/;

export const PHONE_PATTERN =
  /(([+][[]?[0-9]{1,3}[]]?)|([(]?[0-9]{4}[)]?))s*[)]?[-s.]?[(]?[0-9]{1,3}[)]?([-s.]?[0-9]{3})([-s.]?[0-9]{3,4})/;

export const VIETNAM_PHONE_PATTERN = /(84|0[3|5|7|8|9])+([0-9]{8})\b/;

export const SPEC_KEY = 'SPEC';

export const EMAIL_PATTERN =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const DATE_PATTERN = /(((0)[0-9])|((1)[0-2]))(\/)([0-2][0-9]|(3)[0-1])(\/)\d{4}$/;

export const UUID_PATTERN =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[0-5][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

export const PAGE_LIMIT = 10;
export const LIMIT = 10;
export const PAGE = 1;
export const OFFSET = 0;
export const SOFT_TYPE = 'DESC';
export const SOFT_FIELD = 'updated_at';
export const PAGE_NO_LIMIT = {
  page: 1,
  perPage: 0,
};

//Megabyte
export const IMAGE_MAX_SIZE = 5;

export const INVESTOR_EXCEL_NAME = 'investors.xlsx';

export const URL_UPLOAD_IMAGE_CK = '/api/clouds/upload-image-ckeditor';
