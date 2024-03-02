import './index.css'

const BlogList = props => {
  const {blogList} = props
  const {title, description, publishedDate} = blogList
  return (
    <li className="each-list-container">
      <div className="title-description-container">
        <h1 className="heading">{title}</h1>
        <p className="description">{description}</p>
      </div>

      <p className="publishedDate">{publishedDate}</p>
    </li>
  )
}

export default BlogList
