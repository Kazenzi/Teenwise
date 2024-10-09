import {
  LockClosedIcon,
  LightBulbIcon,
  UserGroupIcon,
  MapPinIcon,
  CogIcon,
  ServerIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    name: "Ussd Code Prompt",
    description:
      "Engage with TeenWise using our USSD platform to access personalized sexual health information, ask questions, and seek confidential support. We ensure privacy in every interaction, empowering you to make informed decisions about your  sexual health",
    icon: ShieldCheckIcon,
  },

  {
    name: "Personilized side kick",
    description:
      " Get tailored advice through our interactive system. Whether it's navigating questions about sexual health, relationships, or body changes, TeenWise provides trusted and accurate information to support your journey",
    icon: CogIcon,
  },

  {
    name: "Sexual Health Professionals ",
    description:
      "Access a network of sexual health professionals ready to provide confidential guidance. Whether via WhatsApp chats, blogs, or our social media channels, you’ll find a supportive community offering expert advice and shared experiences",
    icon: UserGroupIcon,
  },
];

export default function Example() {
  return (
    <div className="relative bg-white py-16 sm:py-32 lg:py-40">
      <div className="mx-auto max-w-md px-6 text-center sm:max-w-3xl lg:max-w-7xl lg:px-8">
        <h2 className="text-lg font-semibold text-pink-600">
          Confidential. Safe. Empowered.
        </h2>
        <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Your Path to Health, Safety, and Confidence
        </p>
        <p className="mx-auto mt-5 max-w-prose text-xl text-gray-500">
          TeenWise is dedicated to empowering teens with reliable, confidential
          information on sexual health. We provide a safe space for teens to ask
          questions, seek guidance, and make informed decisions. Whether it's
          understanding safe practices or finding support, TeenWise is here to
          help teens take control of their sexual health and make responsible
          choices for their future..
        </p>
        <div className="mt-20">
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="pt-6">
                <div className="flow-root rounded-lg bg-gray-50 px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center rounded-xl bg-pink-500 p-3 shadow-lg">
                        <feature.icon
                          className="h-8 w-8 text-white"
                          aria-hidden="true"
                        />
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-semibold leading-8 tracking-tight text-gray-900">
                      {feature.name}
                    </h3>
                    <p className="mt-5 text-base leading-7 text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
