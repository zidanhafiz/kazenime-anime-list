import { Info } from '@/types';
import Image from 'next/image';

const SidebarDetail = ({ anime, manga, info }: any) => {
	return (
		<div className='border rounded-md bg-slate-100 dark:bg-gray-900 p-6 flex flex-col items-stretch max-w-[320px]'>
			<div className='w-full'>
				<Image
					src={anime.images.webp.large_image_url}
					alt={anime.title}
					width={600}
					height={600}
				/>
			</div>
			{/* Informations Section */}
			<div className='leading-6 mt-6'>
				<section>
					<h2 className='mb-2 font-semibold'>Alternative Titles</h2>
					<hr className='mb-2' />
					<p className='font-light'>
						<span className='font-medium'>Japanese</span>: {anime.title_japanese}
					</p>
					<p className='font-light'>
						<span className='font-medium'>English</span>: {anime.title}
					</p>
				</section>
				<section className='mt-8'>
					<h2 className='mb-2 font-semibold'>Information</h2>
					<hr className='mb-2' />
					{info.map((item: Info) => (
						<p
							className='font-light'
							key={item.type}
						>
							<span className='font-medium'>{item.type}</span>: {item.value}
						</p>
					))}
				</section>
				<section className='mt-8'>
					<h2 className='mb-2 font-semibold'>Resources</h2>
					<hr className='mb-2' />
					<div className=''>
						{anime.external.map(
							(item: { name: string; url: string }, i: number) =>
								i < 3 && (
									<a
										className='font-light block leading-7 text-primary hover:underline'
										key={item.name}
										href={item.url}
										target='_blank'
									>
										{item.name}
									</a>
								)
						)}
					</div>
				</section>
				<section className='mt-8'>
					<h2 className='mb-2 font-semibold'>Streaming</h2>
					<hr className='mb-2' />
					{anime?.streaming?.map((item: { name: string; url: string }) => (
						<a
							className='font-light block leading-7 text-primary hover:underline'
							key={item.name}
							href={item.url}
							target='_blank'
						>
							{item.name}
						</a>
					))}
				</section>
			</div>
		</div>
	);
};

export default SidebarDetail;
