import Link from 'next/link';
import PropTypes from 'prop-types';

const PostCardContent = ({ postData }) => ( // 첫 번째 게시글 #해시태그 #익스프레스
  <div>
    {postData.split(/(#[^\s#]+)/g).map((v) => {
      if (v.match(/(#[^\s#]+)/)) {
        return <Link href={`/hashtag/${v.slice(1)}`}><a>{v}</a></Link>
      }
      return v;
    })}
  </div>
);

PostCardContent.PropTypes = { postData: PropTypes.string.isRequired };

export default PostCardContent;