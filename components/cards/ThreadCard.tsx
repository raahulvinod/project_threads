interface Props {
  id: string;
  currentUser: string;
  parentId: string;
  content: string;
  author: {
    name: string;
    image: string;
    id: string;
  };
  community: {
    id: string;
    name: string;
    image: string;
  } | null;
  createdAt: string;
  comments: {
    author: {
      image: string;
    };
  }[];
  isComment?: boolean;
}

const ThreadCard = ({
  id,
  currentUser,
  parentId,
  content,
  author,
  community,
  createdAt,
  comments,
}: Props) => {
  return (
    <article>
      <h2
        className="
      text-small-regular text-light-2"
      >
        {content}
      </h2>
    </article>
  );
};

export default ThreadCard;
