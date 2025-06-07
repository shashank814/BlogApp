import express from 'express';
import { addBlog, addComment, deleteBlogsById, generateContent, getAllBlogs, getBlogComments, getBlogsById, togglePublish } from '../controllers/blogController.js';
import upload from '../middleware/multer.js';
import auth from '../middleware/auth.js';

// const blogRouter = express.Router();

// blogRouter.post('/add', upload.single('image'), auth, addBlog);
// blogRouter.get('/all', getAllBlogs);
// blogRouter.post('/comments', getBlogComments);
// blogRouter.get('/:blogId', getBlogsById);
// blogRouter.post('/delete', deleteBlogsById);
// blogRouter.post('/toggle-publish', auth, togglePublish);
// blogRouter.post('/add-comment', addComment);
// // blogRouter.post('/comments', getBlogComments);

// export default blogRouter;



const blogRouter = express.Router();

blogRouter.post('/add', upload.single('image'), auth, addBlog);
blogRouter.get('/all', getAllBlogs);

blogRouter.post('/comments', getBlogComments);

blogRouter.get('/:blogId', getBlogsById);
blogRouter.post('/delete', deleteBlogsById);
blogRouter.post('/toggle-publish', auth, togglePublish);
blogRouter.post('/add-comment', addComment);

blogRouter.post('/generate', auth, generateContent);

export default blogRouter;