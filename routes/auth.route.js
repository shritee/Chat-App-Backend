const {getRegisterData} = require('../controller/auth.controller')
const {postNewPost,getPost} = require('../controller/post.controller')
const authentication = require('../middleware/authentication')
const {upload} = require('../middleware/postStorage')
const express = require ("express")

const router = express.Router()
/**
 * @swagger
 * /auth/getRegisteredData:
 *   get:
 *     summary: Get registered user data
 *     description: Retrieve data for registered users.
 *     responses:
 *       200:
 *         description: A list of registered user data.
 *         content:
 *           application/json:
 *             example: [{ userId: 1, username: 'John' }]
 */
router.get(`/getRegisteredData`,getRegisterData);
/**
 * Handle POST request to create a new post.
 * @swagger
 * /auth/postNewPost:
 *   post:
 *     summary: Create a new post with form data
 *     description: Create a new post with a specified schema and form data.
 *     consumes:
 *       - multipart/form-data
 *     parameters:
 *       - in: formData
 *         name: post_remarks
 *         type: string
 *         description: Remarks for the post.
 *       - in: formData
 *         name: userid
 *         type: string
 *         description: User ID associated with the post.
 *       - in: formData
 *         name: post
 *         type: file
 *         description: An image file to upload.
 *     responses:
 *       200:
 *         description: Post created successfully.
 *         content:
 *           application/json:
 *             example: { message: 'Post created successfully' }
 */
router.post(`/postNewPost`,upload.single('post'),postNewPost)
/**
 * @swagger
 * /auth/getPost/{userid}:
 *   get:
 *     summary: Get a post by user ID
 *     description: Retrieve a post based on the provided user ID.
 *     parameters:
 *       - in: path
 *         name: userid
 *         required: true
 *         schema:
 *           type: integer
 *         description: User ID for the post retrieval.
 *     responses:
 *       200:
 *         description: The retrieved post.
 *         content:
 *           application/json:
 *             example: { postId: 1, content: 'Lorem ipsum' }
 */
router.get(`/getPost/:userid`,getPost)


module.exports = router

