// blog post page
import { useParams } from "react-router-dom"
import { Container, Divider, Typography } from "@mui/material"

interface ParamTypes {
	id: string
}

const Post = () => {
	
	const { id } = useParams<ParamTypes>()

	return (
		<Container component="main">
			<Typography variant='h4' component='h4' align='left' className="postTitle">Blog Post Title  will go here</Typography>	
			<Typography variant='body1' component='p' align='left' className="postAuthor">Showing post for id: {id} submitted by Author Name </Typography>
			<Divider />
			<Typography variant='body1' component='p' align='left' className="postBody">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde distinctio iusto facere pariatur reprehenderit nesciunt, praesentium quis? Dicta nam reprehenderit dolore illo, dolorem laudantium, quibusdam adipisci repudiandae nesciunt expedita libero.
				Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet in atque quos deserunt vitae earum suscipit incidunt est voluptatum eaque, recusandae consectetur eius? Odio accusantium amet consequuntur tempore iste veritatis aperiam rerum nemo accusamus quae incidunt, quisquam ea itaque. Excepturi laborum in reprehenderit voluptatibus, quia magni aut doloremque! Delectus illum dicta assumenda ipsam voluptatem vero esse quod optio fugit cum ullam numquam eum consequuntur reprehenderit cumque, dolorum laboriosam! Quaerat delectus odit vero illum veritatis placeat dignissimos perspiciatis. Ipsum saepe nihil blanditiis autem, a, eum nisi similique ipsam optio rem fugiat fugit animi ratione voluptatibus quasi, nesciunt minus porro. Odio vero consequatur perferendis, molestiae doloribus illum numquam amet explicabo minus quaerat error nihil et minima aliquam accusantium nisi, molestias officia. Adipisci omnis quidem rem. Ullam dolor cupiditate quos, magnam sunt fugiat ut earum, maxime quod, cum ex aliquam. Quod doloremque itaque hic molestias unde iste aperiam harum delectus sit, enim ratione officiis est quas quibusdam dicta illo excepturi adipisci accusantium eum provident fugiat numquam! Quam maxime, adipisci ratione minus aliquid maiores voluptatibus nemo quia, distinctio dolore quae modi culpa eaque doloremque, mollitia corporis ducimus nobis molestias asperiores voluptatum molestiae voluptas consequuntur. Ipsa unde itaque culpa id. Deserunt excepturi sunt, culpa, autem, inventore delectus distinctio nesciunt similique eligendi debitis illum quos? Quia ullam sunt accusamus quaerat nam cum tempore veniam quis totam architecto magni beatae perferendis enim odio sequi natus assumenda amet iusto sapiente rerum, quas esse cupiditate fugiat eveniet? Sunt vel excepturi consequuntur illum earum suscipit itaque eaque neque rerum eos laboriosam doloremque, explicabo deleniti at distinctio quia fuga maxime voluptas fugit quam error beatae! Laboriosam beatae aliquid veritatis earum ipsa asperiores inventore, consequuntur quos, incidunt numquam eligendi animi officiis velit quae. Temporibus, consequatur? Quis exercitationem cupiditate beatae voluptatem. Dolor perspiciatis provident soluta officia blanditiis accusantium reiciendis, illo sit optio! Voluptas, fugit tempore consequatur atque reprehenderit molestiae, ipsa iusto quia dolores enim minus facere nemo ab perspiciatis veritatis aperiam quod harum fugiat repellat temporibus similique. Dolores, rerum minus. Molestias tenetur officia velit, dolorum autem explicabo? Consequuntur quas numquam possimus rerum velit, quidem animi hic iusto vel nam atque tempora tenetur eveniet recusandae nobis voluptatem suscipit maxime maiores itaque adipisci quo expedita similique tempore ratione? Explicabo earum maiores illum rerum nemo? Ut eos perspiciatis exercitationem ratione id quibusdam! Alias natus consequuntur adipisci rem, numquam tempora magnam accusantium qui voluptatem, quas necessitatibus tempore, dolor ipsam! Dolorum, error? Ut ea est sequi, ducimus suscipit voluptate minima enim mollitia corrupti rerum laboriosam corporis assumenda beatae obcaecati sapiente laborum similique nobis porro? Voluptas laborum ipsam, aspernatur, perspiciatis alias ratione impedit necessitatibus, expedita atque consequuntur amet! Vitae, consectetur amet corporis accusamus at repellendus reprehenderit, maiores non dicta fuga quos similique harum inventore temporibus molestias! Numquam voluptate totam perferendis autem eos voluptatibus sed dignissimos necessitatibus nobis impedit velit labore nihil non, harum in? Quae quidem animi nobis distinctio voluptatibus exercitationem. Officia recusandae quia quibusdam architecto voluptates quas assumenda consequatur earum a autem vero voluptate sit necessitatibus laboriosam beatae adipisci, nobis fugiat minus, fuga ea veritatis eligendi. Tempora, distinctio?
			</Typography>
			<Divider />
		</Container>
	)
}

export default Post