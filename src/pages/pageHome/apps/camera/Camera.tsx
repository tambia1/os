import { Button } from "@src/components/button/Button";
import * as S from "./Camera.styles";
import { Text } from "@src/components/text/Text";
import { useRef, useState } from "react";

export const Camera = () => {
	const [capturedImage, setCapturedImage] = useState<string | null>(null);
	const videoRef = useRef<HTMLVideoElement>(null);

	const handleTakePicture = async () => {
		try {
			const stream = await navigator.mediaDevices.getUserMedia({
				audio: false,
				video: {
					facingMode: { exact: "environment" },
					width: { min: 1024, ideal: 1280, max: 1920 },
					height: { min: 576, ideal: 720, max: 1080 },
				},
			});
			if (videoRef.current) {
				videoRef.current.srcObject = stream;
			}
		} catch (error) {
			console.error("Error accessing camera:", error);
		}
	};

	const handleCapture = () => {
		if (videoRef.current) {
			const canvas = document.createElement("canvas");
			canvas.width = videoRef.current.videoWidth;
			canvas.height = videoRef.current.videoHeight;
			const context = canvas.getContext("2d");
			if (context) {
				context.drawImage(videoRef.current, 0, 0, videoRef.current.videoWidth, videoRef.current.videoHeight);
				const imageUrl = canvas.toDataURL("image/png");
				setCapturedImage(imageUrl);
			}
		}
	};

	return (
		<S.Camera>
			<Button onClick={handleTakePicture}>Start Camera</Button>
			<S.Video ref={videoRef} autoPlay />
			<Button onClick={handleCapture}>Take Picture</Button>
			<Text>Picture:</Text>
			<S.Image src={capturedImage ? capturedImage : ""} alt="Captured" />
		</S.Camera>
	);
};
