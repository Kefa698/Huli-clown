import {
	BadgeCheckIcon,
	CollectionIcon,
	HomeIcon,
	LightningBoltIcon,
	SearchIcon,
	UserIcon,
} from '@heroicons/react/outline';
import Image from 'next/image';
import React from 'react';
import HeaderItem from './HeaderItem';

function Header() {
	return (
		<header className="flex flex-col items-center justify-between m-5 sm:flex-row">
			<div className="flex flex-grow max-w-2xl justify-evenly">
				<HeaderItem title="Home" Icon={HomeIcon} />
				<HeaderItem title="Trending" Icon={LightningBoltIcon} />
				<HeaderItem title="Verified" Icon={BadgeCheckIcon} />
				<HeaderItem title="Collection" Icon={CollectionIcon} />
				<HeaderItem title="Search" Icon={SearchIcon} />
				<HeaderItem title="Account" Icon={UserIcon} />
			</div>
			<Image
				className="object-contain"
				src="https://rb.gy/rkirix"
				width={150}
				height={80}
			/>
		</header>
	);
}

export default Header;
